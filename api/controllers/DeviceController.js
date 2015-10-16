/**
 * DeviceController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	name: function(req, res){
        var id = req.param("id");
        var name = req.param("cangbaojie_name");
        device.update({id: id}, {cangbaojie_name: name}).exec(function(err, doc){
            if (err) {
                res.serverError(err);
                
            }
            res.json(doc);
            res.end();
            });
    }
};

