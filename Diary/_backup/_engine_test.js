const fs=require('fs'), path=require('path');
const ROOT=process.cwd();
const tpl=fs.readFileSync('Diary/_Templates/周报-取数引擎.md','utf8').replace(/\r\n/g,'\n');
const src=tpl.match(/```dataviewjs\n([\s\S]*?)\n```/)[1];
const files=[];
(function walk(d){for(const e of fs.readdirSync(path.join(ROOT,d),{withFileTypes:true})){const rel=d?d+'/'+e.name:e.name;if(e.name.startsWith('.')||e.name==='node_modules')continue;if(e.isDirectory())walk(rel);else if(e.name.endsWith('.md'))files.push(rel);}})('');
const vault={ getMarkdownFiles:()=>files.map(p=>({path:p,basename:path.basename(p,'.md'),stat:{mtime:fs.statSync(path.join(ROOT,p)).mtimeMs}})) };
(async()=>{
  const name=process.argv[2]||'W48';
  const dv={
    current:()=>({file:{name,path:'Diary/2026/'+name+'.md'}}),
    io:{load:async p=>fs.readFileSync(path.join(ROOT,p),'utf8')},
    sectionLink:(p,s,e,l)=>'[[LINK:'+p+'#'+s+'|'+(l||s)+']]',
    fileLink:(p,e,l)=>'[[FILE:'+p+'|'+(l||p)+']]'
  };
  const f=new Function('app','dv',src);
  f.call({container:{style:{}}},{vault,workspace:{getActiveFile:()=>null}},dv);
  const W=globalThis.WRF;
  console.log('WRF 定义:', typeof W);
  const api=W(dv);
  console.log('head :', api.head());
  console.log('week :', api.week());
  console.log('span :', api.span());
  console.log('d(0) :', api.d(0), '| d(3):', api.d(3));
  console.log('cover:', await api.cover());
  console.log('ev(0) 返回类型:', (await api.ev(0)).constructor.name);
  console.log('ev(0) 条数:', (await api.ev(0)).length);
  console.log('ev(0)[0]:', (await api.ev(0))[0]);
  console.log('ev(1) :', await api.ev(1));
  for (const m of ['mind','act','res','notes']) {
    const v = await api[m](0);
    console.log(m+'(0):', (typeof v==='string'? v : String(v)).slice(0,70));
  }
  console.log('mind(1):', await api.mind(1));
})().catch(e=>{console.error('ERR',e);process.exit(1)});
