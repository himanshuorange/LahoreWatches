const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const assert = require('assert');
const url = "mongodb://quizappp:quizappp@ds117859.mlab.com:17859/quizappp";
function new_user(obj,callback)
{
    mongoClient.connect(url, function (err, db)
    {
        assert.equal(err,null);
        var handler = db.collection('user-detail');
        handler.find({'uid':obj.uid}).toArray(function (err,result) {
            assert.equal(err,null);
            if(result.length)
            {
                db.close();
                console.log(result[0]);
                callback(0);
            }
            else
            {
                handler.insertOne(
                    {
                        'uid':obj.uid,
                        'name':obj.displayName,
                        'email' : obj.email,
                        'phone_number':'',
                        'address':''
                    },function (err,result) {
                        assert.equal(err,null);
                        db.close();
                        callback(1);
                    }
                );
            }
        });
    });
}


function add_watch_details(obj,callback)
{
    mongoClient.connect(url, function (err, db)
    {
        assert.equal(err,null);

        var handler = db.collection('watch-details');
                handler.insertOne(
                    {
                        'watch_id':obj.watch_id,
                        'type':obj.type,
                        'brand' : obj.brand,
                        'gender':obj.gender,
                        'price':obj.price,
                        'case-shape':obj.case_shape,
                        'strap':obj.strap,
                        'collection':obj.collection,
                        'display':obj.display
                    },function (err,result) {
                        assert.equal(err,null);
                        db.close();
                        callback(1);
                    }
                );
            });
}

module.exports  = {
    new_user:new_user,
    add_watch_details:add_watch_details
};