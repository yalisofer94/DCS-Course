// Logic will be here
const express = require('express');
const {logWriter} = require('./logs.js');
let isError;

function putHandler(req, res, userData) {
    const {
        id
    } = req.params;
    if (id > userData[userData.length - 1].id) {
        isError = true;
        logWriter(`Requested DELETE but invalid id - ${id}`, isError);
        return res.status(404).send('invalid id!');
    }
    const userToUpdate = userData.find((user) => user.id == id);

    const {
        first_name,
        last_name,
        email,
        gender,
        country,
        color
    } = req.body;
    userToUpdate.first_name = first_name;
    userToUpdate.last_name = last_name;
    userToUpdate.email = email;
    userToUpdate.gender = gender;
    userToUpdate.country = country;
    userToUpdate.color = color;

    res.send(`User with id - ${id} changes all of his proparties and now is - ${userToUpdate.first_name} ${userToUpdate.last_name} ${userToUpdate.email} ${userToUpdate.gender} ${userToUpdate.country} ${userToUpdate.color}`);
    logWriter(`Requested Update user id: ${id} name - ${userToUpdate.first_name} ${userToUpdate.last_name}`);
}

function postHandler(req, res, userData) {
    const user = req.body;
    if (req.body == undefined) {
        isError = true;
        logWriter(`Requested DELETE but invalid id - ${id}`, isError);
        return res.status(404).send('No Data!');
    }
    const count = userData[userData.length - 1].id + 1;
    userData.push({
        id: count,
        ...user
    });

    res.send(`User name updated- ${user.first_name}`);
    logWriter(`Requested Add user with name - ${user.first_name} ${user.last_name}`);
}

function deleteHandler(req, res, userData) {
    const {
        id
    } = req.params;
    if (id > userData[userData.length - 1].id) {
        isError = true;
        logWriter(`Requested DELETE but invalid id - ${id}`, isError);
        return res.status(404).send('invalid id!');
    }
    const UserToDelete = userData.findIndex((user) => user.id == id);
    userData.splice(UserToDelete, 1);
    res.send(`The user with id = ${id} deleted!`);
    logWriter(`Requested DELETE user with id - ${id}`);
    console.log(userData.find((userss) => userss.id == id));
}

function idGetHandler(req, res, userData) {
    const {
        id
    } = req.params;
    if (id > userData[userData.length - 1].id) {
        isError = true;
        logWriter(`Requested DELETE but invalid id - ${id}`, isError);
        return res.status(404).send('invalid id!');
    }

    const foundUser = userData.find((user) => user.id == id);

    res.send(foundUser);
    logWriter(`Requested GET user with id: ${id}`);
}


module.exports = {
    putHandler,
    postHandler,
    deleteHandler,
    idGetHandler
}