import { useGlobalStore } from "../../../store/global/global.store"
import { useEffect, useRef } from "react";
import { Cart } from "../cart/Cart";
import { Search } from "../search/Search";

export const Sheet = () => {

    const sheetContent = useGlobalStore(state => state.sheetContent);
    const closeSheet = useGlobalStore(state => state.closeSheet);

    const sheetRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        document.body.style.overflow =  'hidden'
        // Funcion para manejar clicks fuera del Sheet
        const handleOutsideClick = (event: MouseEvent) => {
            if (sheetRef.current && !sheetRef.current.contains(event.target as Node)) {
                closeSheet()
            }
        }
        //Agregar el event listener al hacer click en el body
        document.body.addEventListener('mousedown', handleOutsideClick)

        return () => {
            // Limpiar el event listener al cerrar el sheet
            document.body.style.overflow = 'unset'
            document.body.removeEventListener('mousedown', handleOutsideClick)
        }

    }, [closeSheet])

    // Funcion para saber el componente a renderizar
    const renderContent = () => {
        switch (sheetContent) {
            case 'cart':
                return <Cart />
            case 'search':
                return <Search />
            default:
                return null
        }
    }

    return (
      <div className="fixed inset-0 backdrop-blur-xs z-50 flex justify-end animate-fade-in">
        <div
            ref={sheetRef} 
            className="bg-white text-black h-screen w-[500px] shadow-lg animate-slide-in"
        >
          {renderContent()}
        </div>
      </div>
    );
}
