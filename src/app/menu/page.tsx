import { getMenu } from "@/server/menu";
import { MenuContainer } from "@/components/Menu/MenuContainer";

export default async function MenuPage() {
  const menuItems = await getMenu();

  return <MenuContainer menuItems={menuItems} />;
}
