const state = require('../model/state');
const user = require('../model/state');
const bcrypt = require('bcrypt');
const {validationResult, matchedData} = require('express-validator');
const mongoose = require('mongoose');
const user = require('../user.js');


module.exports = {
    getStates: async(req, res) => {
        let states = await state.find();
        res.json({
            states
        });
    },

    getinfo: async(req, res) => {
        // identificar o usuario pelo token

        let token = req.query.token;

        const User = await User.findone({token});
        const state = await state.findid(User.state);

        res.json({
            name: user.name,
            email: user.email,
            state: state.name,
        });
    },
    eidtinfo: async(req, res) => {
        const erros = validationResult(req);
        if (!erros.isEmpyt()){
            res.json({
                error: erros.mapped()
                
            });
            return;
        }
        const data = matchedData(req);
        let updates = {};
    
        if(data.name){
            updates.name = data.name;
        }
        if(data.email){
            const emailCheck = await user.findone({email: data.email});
            if(emailCheck){
                res.json({
                    error: 'email em uso.'
                });
                return;
            }
            updates.email = data.email;

        }
    if (data.state){
        if(mongoose.Types.ObjectId.isValid(data.states)){
            const stateCheck = await state.findById(data.state);
            if(!stateCheck){
                res.json({error:'estado n exist.'});
                return;
            }
            updates.state = data.state;
        }
    }
    if (data.password){
        updates.password = await bcrypt.hash(data.password,10);
    }
    await user.findOneAndUpdate({token: data.token}, {$set: updates});

    }

    
};