Queries MongoDb

1. db.getCollection('restaurant').find({});
2. db.getCollection('restaurant').find({}, { _id : 1, name : 1, borough : 1, cuisine : 1, restaurant_id : 1 });
3. db.getCollection('restaurant').find({}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1 });
4. db.getCollection('restaurant').find({}, { _id : 0, name : 1, borough : 1, 'address.zipcode' : 1, restaurant_id : 1  });
5. db.getCollection('restaurant').find({borough : 'Bronx'});
6. db.getCollection('restaurant').find({borough : 'Bronx'}).limit(5);
7. db.getCollection('restaurant').find({borough : 'Bronx'}).skip(5).limit(5);
8. db.getCollection('restaurant').find({'grades.score' : { $gt : 90 }});
9. db.getCollection('restaurant').find({'grades.score' : { $gt : 80, $lt : 100 }});
10. db.getCollection('restaurant').find({'address.coord.0' : {$lt : -95.754168 }});
11. db.getCollection('restaurant').find( { $and: [ { 'cuisine': { $not: /American / } }, { 'grades.score': { $gt: 70 } }, { 'address.coord.0': { $lt: -65.754168 } } ] } );
12. db.getCollection('restaurant').find({cuisine : { $ne : 'American ' }, 'grades.score' : {$gt : 70}, 'address.coord.0' : {$lt : -65.754168 }});
13. db.getCollection('restaurant').find({cuisine : { $ne : 'American ' }, borough : { $ne : 'Brooklyn' }, 'grades.grade' : 'A' }).sort({ cuisine : -1 });
14. db.getCollection('restaurant').find({name : { $regex : /^Wil/i}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1 });
15. db.getCollection('restaurant').find({name : { $regex : /ces$/i}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1 });
16. db.getCollection('restaurant').find({name : { $regex : /Reg/i}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1 });
17. db.getCollection('restaurant').find({borough : 'Bronx', cuisine : {$in: ['Chinese' , 'American ']}});
18. db.getCollection('restaurant').find({borough : {$in : ['Bronx', 'Staten Island' , 'Brooklyn' , 'Queens']}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1  });
19. db.getCollection('restaurant').find({borough : {$nin : ['Bronx', 'Staten Island' , 'Brooklyn' , 'Queens']}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1  });
20. db.getCollection('restaurant').find({'grades.score' : {$lte : 10}}, { _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1  });
21. db.getCollection('restaurant').find({$or:[ {cuisine:{ $nin:['American ','Chinese'] },name:/^Wil/i},{cuisine:'Seafood'} ] },{ _id : 0, name : 1, borough : 1, cuisine : 1, restaurant_id : 1  });
22. db.getCollection('restaurant').find({$and:[{'grades.grade' : 'A'}, {'grades.score' : 11}, {'grades.date' : ISODate("2014-08-11T00:00:00Z")}]},{_id : 0, name : 1, restaurant_id : 1, grades : 1  });
23. db.getCollection('restaurant').find({$and:[{'grades.grade' : 'A'}, {'grades.score' : 11}, {'grades.date' : ISODate("2014-08-11T00:00:00Z")}]},{_id : 0, name : 1, restaurant_id : 1, grades : {$slice: [1, 1]}});
24. db.getCollection('restaurant').find({'address.coord.1' :{$gt : 42, $lte : 52}}, {_id : 0, name : 1, restaurant_id : 1, 'address.street' : 1, 'address.coord' : 1}); 
25. db.getCollection('restaurant').find({}).sort({name : 1});
26. db.getCollection('restaurant').find({}).sort({name : -1});
27. db.getCollection('restaurant').find({}).sort({cuisine : 1, borough : -1});
28. db.getCollection('restaurant').find({'address.street' : null}, {_id : 0, name : 1, restaurant_id : 0, 'address.street' : 1});
29. db.getCollection('restaurant').find({'address.coord': {$type: 'double'}}, {_id : 0, name : 1, 'address.coord' : 1});
31. db.getCollection('restaurant').find({name : { $regex : /mon/i}}, {_id : 0, name : 1, borough : 1, 'address.coord' : 1, cuisine : 1});
32. db.getCollection('restaurant').find({name : { $regex : /^Mad/i}}, {_id : 0, name : 1, borough : 1, 'address.coord' : 1, cuisine : 1});

