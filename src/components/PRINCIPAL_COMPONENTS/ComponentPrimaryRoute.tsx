import { ComponentNavBar } from "../COMPONENTS-PRIMARY-ROUTE/componentNavBarFolder/ComponentNavBar"
import { ComponentBackgroundImage } from "../COMPONENTS-PRIMARY-ROUTE/componentBackgroungImageFolder/ComponentBackgroundImage"
import { ComponentShowInfoInitialPage } from "../COMPONENTS-PRIMARY-ROUTE/componentShowInfoInitialPageFolder/ComponentShowInfoInitialPage"

export const ComponentPrimaryPage = () => {
    return(
        <body>

            <header>
              <ComponentNavBar />
              <ComponentBackgroundImage />
            </header>
            <main>
              <ComponentShowInfoInitialPage />
            </main>
          </body>
    )
}