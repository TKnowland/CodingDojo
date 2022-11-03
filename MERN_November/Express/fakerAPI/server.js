const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const PORT = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({
        newUser: newUser,
        newCompany: newCompany
    });
})

const server = app.listen(PORT, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);