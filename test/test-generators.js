QUnit.module("Generators");
QUnit.test("Get by name", function( assert ) {
  	assert.equal(metvis.Generators.get_by_name("linear")(1), 
  		metvis.Generators.linear(1), 
  		"Passed!" );
  	assert.equal(metvis.Generators.get_by_name("exponential")(1), 
  		metvis.Generators.exponential(1), 
  		"Passed!" );
  	assert.equal(metvis.Generators.get_by_name("power")(1), 
  		metvis.Generators.power(1), 
  		"Passed!" );
  	assert.equal(metvis.Generators.get_by_name("empty")(1), 
  		metvis.Generators.empty(1), 
  		"Passed!" );
  	assert.equal(metvis.Generators.get_by_name("date")(1), 
  		metvis.Generators.date(1), 
  		"Passed!" );
  	assert.equal(metvis.Generators.get_by_name("not-a-real-generator")(1), 
  		metvis.Generators.empty(1), 
  		"Passed!" );
});

QUnit.test("Test generate from specification", function( assert ) {
	var vis = {
			"name" : "sentiment",
			"type" : "BarChart",
			"datatable" : {
				"rows" : "$repositories",
				"cols" : [  { "name" : "Count", "field" : "$count", "_gen_generator" : "linear" }, 
					{ "name" : "Sentiment", "field" : "$sentiment", "_gen_generator" : "exponential" } ]
			},
			"x" : "Sentiment",
			"y" : "Count"
		};
	var data = metvis.generate_from_spec(vis, 10);
	console.log(data);

	assert.equal(10, data.length);
});


QUnit.test("Test generate from array", function( assert ) {
	var data = metvis.generate([1,2,3,4,5,6,7,8,9,10], metvis.Generators.linear);
	console.log(data);

	assert.deepEqual([4, 7, 10, 13, 16, 19, 22, 25, 28, 31], data);
});