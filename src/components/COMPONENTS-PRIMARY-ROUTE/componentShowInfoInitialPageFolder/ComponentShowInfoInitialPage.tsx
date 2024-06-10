import "./componentShowInfoInitialPageCss.css"
import { ComponentFastIconsInitialPage } from "../componentFastIconsInitialPageFolder/ComponentFastIconsInitialPage"
import { ComponentDisplayItens } from "../componentDisplayItensFolder/ComponentDisplayItens"
import iconeBebidas from "../componentFastIconsInitialPageFolder/imgs/iconeBebidas.png"
import iconeFrutas from "../componentFastIconsInitialPageFolder/imgs/iconeFrutas.png"
import iconeCarne from "../componentFastIconsInitialPageFolder/imgs/iconeCarne.png"
import iconeLimpeza from "../componentFastIconsInitialPageFolder/imgs/iconeLimpeza.png"
import { ComponentIconProducts } from "../componentIconProductsFolder/ComponentIconProducts"

export const ComponentShowInfoInitialPage = () => {
  return (
    <main className="d-flex justify-content-center">
      <div id="CShowInfoInitialPage-mainContainer">
        <div id="CShowInfoInitialPage-containerFastIcons" className="d-flex">
          <ComponentFastIconsInitialPage imageUrl={iconeBebidas} linkUrl={"..."} text={"BEBIDAS"} />
          <ComponentFastIconsInitialPage imageUrl={iconeFrutas} linkUrl={"..."} text={"FRUTAS"} />
          <ComponentFastIconsInitialPage imageUrl={iconeCarne} linkUrl={"..."} text={"CARNES"} />
          <ComponentFastIconsInitialPage imageUrl={iconeLimpeza} linkUrl={"..."} text={"LIMPEZA"} />
        </div>

        <div id="CShowInfoInitialPage-containerDisplay">
          <ComponentDisplayItens
            principalText="TESTE"
            product01={<ComponentIconProducts />}
          />
        </div>
      </div>
    </main>
  )
}