import { FormContact } from "./FormContact/FormContact";
import { ContactList } from "./ContactList/ContactList";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Container, MainTitle, Title } from "./App.styled";
import { useSelector } from "react-redux";

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)

  const getVisibleItems = () => {
    return contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(filter)
    })
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />

      <Title>Contact List</Title>
      <SearchFilter  />
      <ContactList items={getVisibleItems()} />
    </Container>
  )
};

