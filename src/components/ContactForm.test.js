import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm'


test('ContactForm adds new contact to the list', () =>{
    render(<ContactForm/>)
})