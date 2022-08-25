const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const studentSchema = require('../models/Students');

// Create Student
router.post('/create-student', (req, res, next) => {
    const student = new studentSchema(req.body);
    student.save((error, data) => {
        if (error) return next(error);
        else {
            console.log(data);
            res.json(data);
        }
    });
});

//READ Students
router.get('/', (req, res) => {
    studentSchema.find((error, data) => {
        if (error) return next(error);
        else res.json(data);
    });
});

// Get Single Student
router.get('/edit-student/:id', (req, res) => {
    studentSchema.findById(req.params.id, (error, data) => {
        if (error) return next(error);
        else res.json(data);
    });
});

//Update a Student
router.put('/update-student/:id', (req, res,next) => {
    studentSchema.findByIdAndUpdate(req.params.id, { $set: req.body },
        (error, data) => {
            if (error) return next(error);
            else {
                res.json(data);
                console.log('Student updated successfully !')
            }
        });
});

// Delete a Student
router.delete('/delete-student/:id', (req, res, next) => {
    studentSchema.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Student updated successfully !')
        }
    });
});

module.exports = router;