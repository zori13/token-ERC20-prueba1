export default function Footer(){
    return (
    <footer className="border-t py-4 px-3 flex justify-center bg-white shadow-sm">
        <p>Ojo! contenido con derechos de autor   {new Date().getFullYear()}</p>
    </footer>
    )
}