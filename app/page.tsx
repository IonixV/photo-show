import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'images');

function getImages() {
  try {
    const files = fs.readdirSync(imagesDirectory);
    return files.filter((file: string) => file.match(/\.(jpe?g|png|gif|webp)$/i));
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const images = getImages();
  return (
    <div style={{background:'#111', minHeight:'100vh', padding:'2rem'}}>
      <h1 style={{color:'#fff', textAlign:'center', fontWeight:700, marginBottom:'1.5rem'}}>Photo Grid Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
        gap: '1.25rem',
        maxWidth:1200,
        margin:'0 auto'}}
      >
        {images.length === 0 && <p style={{color:'#888'}}>No images found in /images</p>}
        {images.map((file) => (
          <div key={file} style={{borderRadius:8,overflow:'hidden',background:'#222',boxShadow:'0 2px 16px #0004'}}>
            <img
              src={`/images/${file}`}
              alt={file}
              style={{width:'100%', display:'block', aspectRatio:'1.2', objectFit:'cover', transition:'transform .3s', cursor:'pointer'}}
              onMouseOver={e => (e.currentTarget.style.transform='scale(1.04)')}
              onMouseOut={e => (e.currentTarget.style.transform='')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
