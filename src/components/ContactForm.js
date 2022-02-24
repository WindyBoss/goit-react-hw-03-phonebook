import { Component } from "react";
import { Formik, Form, Field } from 'formik';
import { FormContainer, LabelContainer, Label, FormButton } from "./Contacts.styled";

export default class ContactForm extends Component{


      handleSubmit = (values, { resetForm }) => {
        this.props.onSubmit(values);
        resetForm();
      };

  render () {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        // validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <FormContainer>

            <LabelContainer>
              <Label>Name</Label>
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder='Text your name'
              />
            </LabelContainer>
            <LabelContainer>
              <Label>Number</Label>
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder='Text your number'
              />
            </LabelContainer>
            <FormButton type='submit' >add contact</FormButton>
          </FormContainer>

        </Form>
      </Formik>
    );
  };
}
