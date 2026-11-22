const fs=require('fs'), path=require('path');
const ROOT=process.cwd();
const tpl=fs.readFileSync('Diary/_Templates/周报模板.md','utf8').replace(/\r\n/g,'\n');
const src=tpl.match(/```dataviewjs\n([\s\S]*?)\n```/)[1];
const files=[];
(function walk(d){for(const e of fs.readdirSync(path.join(ROOT,d),{withFileTypes:true})){const rel=d?d+'/'+e.name:e.name;if(e.name.startsWith('.')||e.name==='node_modules')continue;if(e.isDirectory())walk(rel);else if(e.name.endsWith('.md'))files.push(rel);}})('');
const vault={
  getMarkdownFiles:()=>files.map(p=>({path:p,basename:path.basename(p,'.md')})),
  read:async f=>fs.readFileSync(path.join(ROOT,f.path),'utf8')
};
(async()=>{
  const name=process.argv[2]||'W48';
  let el={innerHTML:''}, out=[];
  const dv={
    current:()=>({file:{name,path:'Diary/2026/'+name+'.md'}}),
    io:{load:async p=>fs.readFileSync(path.join(ROOT,p),'utf8')},
    container:{createEl:()=>{el={innerHTML:''};return el;}},
    header:(l,t)=>out.push('H'+l+': '+t),
    paragraph:(t)=>out.push(t)
  };
  const f=new Function('app','dv',`return (async()=>{${src}})()`);
  await f.call({container:{style:{}}},{vault,workspace:{getActiveFile:()=>null}},dv);
  console.log(out.join('\n'));
  console.log('\n--- 表格结构 ---');
  const html=el.innerHTML;
  console.log('rows(<tr>):',(html.match(/<tr>/g)||[]).length,
              '| rowspan:',(html.match(/rowspan="(\d+)"/g)||[]).join(','),
              '| td:',(html.match(/<td/g)||[]).length,
              '| 空内心:',(html.match(/>—<\/td>/g)||[]).length);
  if(process.argv[3]==='html'){fs.writeFileSync('Diary/_backup/_w48.html',html);console.log('html written');}
  console.log('\n--- 前 3 个数据行（去标签）---');
  html.split('</tr>').slice(1,4).forEach(r=>{
    console.log(r.replace(/<[^>]+>/g,' | ').replace(/\s+/g,' ').trim().slice(0,220));
  });
})().catch(e=>{console.error('ERR',e.message)});
