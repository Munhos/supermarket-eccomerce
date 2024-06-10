import { ComponentItemDisplay } from "./ComponentSingleItemFolder/ComponentSingleItem";
export class Utils {
    updateScreen(classType: string): JSX.Element[] {
        const componentsList: JSX.Element[] = [];

        const fetchItems = (key: string) => {
            const dbString = localStorage.getItem(key);
            const dbItems = dbString ? JSON.parse(dbString) : {};

            if (dbItems) {
                Object.values(dbItems).forEach((e: any) => {
                    componentsList.push(
                        <ComponentItemDisplay
                            key={e.id}
                            id={e.id}
                            classType={key}
                            name={e.name}
                            description={e.description}
                            price={e.price}
                        />
                    );
                });
            }
        };

        switch (classType) {
            case "drinks":
                fetchItems('DB-Drinks');
                break;
            case "cleaner":
                fetchItems('DB-Cleaner');
                break;
            case "meats":
                fetchItems('DB-Meats');
                break;
            case "fruits":
                fetchItems('DB-Fruits');
                break;
            default:
                console.warn(`Unknown classType: ${classType}`);
        }

        return componentsList;
    }
}

// Exemplo de como usar a classe
const utils = new Utils();
const components = utils.updateScreen("drinks");