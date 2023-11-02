import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { List } from "./ContactList.styled";

export const ContactList = (({ items }) => {
    return (
        <List>
            {items.map(item => {
                return (
                    <ContactListItem
                        key={item.id}
                        contact={item}/>   
                )
            })}
        </List>
    )
})