import styles from './page.module.css'
import Image from 'next/image'
import hawaii from '../public/Hawaii.png'
import seta from '../public/arrow-right.svg'

function Botao({x,y}) {
  return (
    <button style= {{left:x,top:y}} className={styles.botao}>Start</button>
  )
}

function Card({localidade,imagem}){
  return(
    <div className={styles.card}>
<p className={styles.localidade}>{localidade}</p>
<Image src={seta}/>
<Image src={imagem}/>
    </div>
  )
} 

export default function Home() {
  return (
  <>
   <Botao x={135} y={601.72}/>    
   <Card localidade="Hawaii"imagem={hawaii}/>
   <Card localidade="Cyprus"imagem={hawaii}/>
   <Card localidade="Bali"imagem={hawaii}/>
   
  </>
  )
}
