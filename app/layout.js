import './globals.css'
import styles from './styles.module.css'
// import { Quicksand } from 'next/font/google'
import Image from 'next/image';


export const metadata = {
  title: 'Travel Landing Page',
}

// const quicksand = Quicksand({
//   subsets: ['latin'],
//   display: 'swap',
// })

function Logo({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  );
}

function ItemMenu({nome}){
  return (
    <p className={styles.itemMenu}>{nome}</p>
  );
}

function Menu({children, x, y}){
  return(
    <ul style={{left: x, top: y}} className={styles.menu}>
      {children.map((itemMenu) => (
        <li key={itemMenu.nome}>{itemMenu}</li>
      ))}
    </ul>
  );
}
//aaaa

//aaaa
function Texto({x, y}){
  return (
    <h1 style={{left: x, top: y }} className={styles.texto}>Your perfect honeymoon</h1>
  );
}
function Texto2({x, y}){
  return (
    <h2 style={{left: x, top: y }} className={styles.texto2}>Mayami is more than a honeymoon destination – it’s a perfect romantic spot for couples who like  spending time in beach. </h2>
  );
}
//aaaaa
function Foto({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.foto}><Image src='/phone icon.png'width={19} height={19}/></p>
  );
  
}

//aaaaa
function Telefone({x, y}){
  return (
    <p style={{left: x, top: y }} className={styles.telefone}>+38(097)8849989</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={styles.corpo}>
        <header>
          <Logo x={135} y={53}/>
          <Menu x={435} y={60}>
            <ItemMenu nome="Home"/>
            <ItemMenu nome="About"/>
            <ItemMenu nome="Contact"/>
            <ItemMenu nome="Blog"/>
            <ItemMenu nome="Videos"/>
          </Menu>
          <Foto></Foto>
          <Telefone></Telefone>
        </header>
        <main>
          <Texto></Texto>
          <Texto2></Texto2>
          {children}
          
        </main>
        
      </body>
    </html>
  )
}



