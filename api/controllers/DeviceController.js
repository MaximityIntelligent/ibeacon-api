/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	cbjTag: function(req, res){
        var id = req.param("id");
        var cbj_tag = req.param("cbj_tag");
        device.update({id: id}, {cbj_tag: cbj_tag}).exec(function(err, doc){
            if (err) {
                res.serverError(err);
            }
            res.json(doc);
            res.end();
            });
    },
    findCbjTag: function(req, res){
        option = {};
        option.cbj_tag = {'!': ['','undefined', null]};
        device.find(option).exec(function(err, results){
            if(err){
                res.status(500);
                res.end();
            }else{
                res.json(results);
                res.end();
            }
        })
    },
    search: function(req, res){
        var location_type = req.param('location_type');
        var state = req.param('state');
        var city = req.param('city');
        var region = req.param('region');
        var area = req.param('area');
        var option = {};

        if(location_type!=null&&location_type!=""){
            option.location_type = location_type;
        }
        if (state!=null&state!="") {
            option.state = state;
        }
        if (city!=null&&city!="") {
            option.city = city;
        }
        if(region!=null&&region!=""){
            option.region = region;
        }
        if(area!=null&&area!=""){
            option.area = area;
        }
        option.cbj_tag = {'!': ['','undefined', null]};
        device.find(option).exec(function(err, results){
            console.log("results length"+results.length);
            res.json(results);
            res.end();
        });
    },
    findOne: function(req, res){
        var id = req.param("id");
        device.findOne({id: id}).exec(function(err, result){
            res.json(result);
            res.end();  
            });
    },
    getCbjTag: function(req, res){
        var uuid = req.param('uuid');
        var major = req.param('major');
        var minor = req.param('minor');
        device.findOne({uuid: uuid, major: major, minor: minor}).exec(function(err, result){
            res.write(result.cbj_tag);
            res.end();
        });
    }
};

