import { ComponentNavBar } from "../../componentNavBarFolder/ComponentNavBar"
import { ComponentBackgroundImage } from "../../componentBackgroungImageFolder/ComponentBackgroundImage"
import { ComponentShowInfoInitialPage } from "../../componentShowInfoInitialPageFolder/ComponentShowInfoInitialPage"

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