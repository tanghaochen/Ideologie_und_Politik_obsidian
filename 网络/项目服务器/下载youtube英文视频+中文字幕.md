
```
#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
YouTube视频下载工具
支持下载单个视频或整个播放列表，自动下载中文字幕
需要安装: pip install yt-dlp

使用方法：
1. 使用完整路径运行: python "f:\\BaiduNetdiskDownload\\get-pip.py"
2. 或者先切换到文件目录: cd f:\\BaiduNetdiskDownload 然后运行: python get-pip.py
"""

import os
import sys
import subprocess

# 确保脚本在正确的目录运行
script_dir = os.path.dirname(os.path.abspath(__file__))
if os.getcwd() != script_dir:
    os.chdir(script_dir)

def check_yt_dlp():
    """检查yt-dlp是否已安装"""
    try:
        import yt_dlp
        return True
    except ImportError:
        return False

def install_yt_dlp():
    """安装yt-dlp"""
    print("正在安装yt-dlp...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp", "--upgrade"])
        print("yt-dlp安装成功！")
        return True
    except subprocess.CalledProcessError:
        print("安装失败，请手动运行: pip install yt-dlp")
        return False

def download_video(url, output_path=None, download_playlist=False):
    """
    下载YouTube视频或播放列表
    
    Args:
        url: YouTube视频或播放列表URL
        output_path: 输出目录（默认为当前目录下的downloads文件夹）
        download_playlist: 是否下载整个播放列表（如果URL是播放列表）
    """
    if not check_yt_dlp():
        if not install_yt_dlp():
            return False
        import yt_dlp
    else:
        import yt_dlp
    
    # 设置输出路径
    if output_path is None:
        output_path = os.path.join(os.getcwd(), "downloads")
    
    if not os.path.exists(output_path):
        os.makedirs(output_path)
    
    # 配置下载选项
    ydl_opts = {
        # 输出路径和文件名格式
        'outtmpl': os.path.join(output_path, '%(title)s.%(ext)s'),
        
        # 视频质量：最佳视频+最佳音频
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
        
        # 字幕设置：下载所有可用字幕，优先中文
        'writesubtitles': True,
        'writeautomaticsub': True,  # 下载自动生成的字幕
        'subtitleslangs': ['zh', 'zh-CN'],  # 优先中文，其次英文
        'subtitlesformat': 'vtt',  # 字幕格式
        
        # 将字幕嵌入视频（需要ffmpeg）
        'embed_subs': True,
        
        # 下载整个播放列表
        'noplaylist': not download_playlist,
        
        # 如果URL是播放列表，下载所有视频
        'yes_playlist': download_playlist,
        
        # 其他选项
        'ignoreerrors': True,  # 忽略错误继续下载
        'no_warnings': False,
        'quiet': False,
        'progress_hooks': [progress_hook],
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"\n开始下载: {url}")
            print(f"输出目录: {output_path}\n")
            
            # 获取视频信息
            info = ydl.extract_info(url, download=False)
            
            if 'entries' in info:
                # 这是播放列表
                print(f"检测到播放列表: {info.get('title', '未知')}")
                print(f"共 {len(info['entries'])} 个视频\n")
            else:
                # 单个视频
                print(f"视频标题: {info.get('title', '未知')}")
                print(f"时长: {info.get('duration', 0)} 秒\n")
            
            # 开始下载
            ydl.download([url])
            print("\n下载完成！")
            return True
            
    except Exception as e:
        print(f"\n下载出错: {str(e)}")
        return False

def progress_hook(d):
    """下载进度回调函数"""
    if d['status'] == 'downloading':
        total = d.get('total_bytes') or d.get('total_bytes_estimate', 0)
        downloaded = d.get('downloaded_bytes', 0)
        if total > 0:
            percent = (downloaded / total) * 100
            print(f"\r下载进度: {percent:.1f}% ({downloaded}/{total} bytes)", end='', flush=True)
    elif d['status'] == 'finished':
        print(f"\n文件已保存: {d.get('filename', '未知')}")

def main():
    """主函数"""
    print("=" * 60)
    print("YouTube视频下载工具")
    print("支持下载单个视频或整个播放列表，自动下载中文字幕")
    print("=" * 60)
    
    # 获取用户输入
    url = input("\n请输入YouTube视频或播放列表URL: ").strip()
    
    if not url:
        print("URL不能为空！")
        return
    
    # 询问是否下载播放列表
    is_playlist = False
    if 'playlist' in url.lower() or 'list=' in url.lower():
        choice = input("检测到播放列表URL，是否下载整个播放列表？(y/n，默认y): ").strip().lower()
        is_playlist = choice != 'n'
    
    # 询问输出路径
    output_path = input("请输入保存路径（直接回车使用默认路径 downloads）: ").strip()
    if not output_path:
        output_path = None
    
    # 开始下载
    download_video(url, output_path, is_playlist)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n用户取消下载")
    except Exception as e:
        print(f"\n发生错误: {str(e)}")
        import traceback
        traceback.print_exc()


```
