import "./ComponentFastIconsInitialPageCss.css"

interface ComponentFastIconsInitialPageProps {
  imageUrl: string;
  linkUrl: string;
  text: string;
}

export const ComponentFastIconsInitialPage = (props:ComponentFastIconsInitialPageProps) => {
  return(
    <main id="CFastIconsInitialPage-mainContainer"className="">
     <h3>{props.text}</h3>
     <img src={props.imageUrl} alt="" id="CFastIconsInitialPage-imgPrincipal"/>
     <button className="btn btn-primary">Saiba mais</button>
    </main>
  )
}