Parse.initialize("2X177DSRKOTInfv9biAFGPW3QfxX2zWagixmG2LG", "8nywLI1QHH6bVEC0W8ynEjaSbYsLR1C7KjQwdGlj");

var timer = 180;
var correct = 0;
var wrong = 0;
var currInterval;
var inArow = 0;
var totalScore = 0;

var mov_size = 326;
var star_size = 417;
var sim_size = 607;

var question1Arr=[];
var question2Arr=[];
var question3Arr=[];
var question4Arr=[];
var question5Arr=[];
var question6Arr=[];
var question7Arr=[];
var question8Arr=[];
prepQ3();
prepQ4();
prepQ5();
prepQ6();
function prepGame()
{

	document.getElementById("startBtn").style.display = "none";
	document.body.style.backgroundColor = "#225F91";
	var countdown = 3;
	var countdownText = document.createElement("h1");
	countdownText.setAttribute("id", "display");
	countdownText.innerHTML = countdown; 
	document.body.appendChild(countdownText); 
	var ans = document.createElement("div");
	document.body.appendChild(ans);
	ans.setAttribute("id", "answerArea");
				prepQ1();
			prepQ2();
	prepQ7();
	prepQ8();
	currInterval = setInterval(function()
	{
		if(countdown == 1)
		{

			countdown--;
			countdownText.innerHTML = countdown; 
			
		}
		else if(countdown == 2)
		{
			countdown--;
			countdownText.innerHTML = countdown; 
			
		}
		else if(countdown == 3)
		{
			countdown--;
			countdownText.innerHTML = countdown;

		}
		else
		{
			document.body.style.backgroundColor = "#2B77B5";
			document.getElementById("nav").style.display = "block";
			timer = 180;
			correct = 0;
			wrong = 0;
			clearInterval(currInterval);
			startTimer();
			chooseQuestion();
		}
	}, 1000);
}

function chooseQuestion()
{
	if(timer > 0)
	{
		//document.getElementById("display").innerHTML = questions[Math.floor((Math.random() * 7))];
		
		var call = Math.floor((Math.random() * 7)+1);
		console.log("Calling: " + call);
		if(call == 1)
		{
			document.getElementById("display").innerHTML = question1();
		}
		else if(call == 2)
		{
			document.getElementById("display").innerHTML = question2();
		}
		else if(call == 3)
		{
			document.getElementById("display").innerHTML = question3();
		}
		else if(call == 4)
		{
			document.getElementById("display").innerHTML = question4();
		}
		else if(call == 5)
		{
			document.getElementById("display").innerHTML = question5();
		}
		else if(call == 6)
		{
			document.getElementById("display").innerHTML = question6();
		}
		else if(call == 7)
		{
			document.getElementById("display").innerHTML = question7();
		}
		else
		{
			chooseQuestion();
		}	
	}
}

function startTimer()
{
	currInterval = setInterval(function()
	{
		if(timer > 0)
		{
			timer--;
			document.getElementById("showTime").innerHTML = timer;
		}
		else
		{
			$("#answerArea").remove();
			var tempDisplay = document.getElementById("display");
			tempDisplay.innerHTML = "You got " + correct + "/" + (correct + wrong) +"<br>Total Score: " + totalScore;
			document.getElementById("startBtn").setAttribute("value", "Replay?");
			document.getElementById("startBtn").style.display = "block";
			document.getElementById("startBtn").onclick = reloadPage;
		}
	}, 1000);
}

function reloadPage()
{
	location.reload();
}

function createBtns(str, bool)
{	
	var choiceBtn = document.createElement("button");
	choiceBtn.onclick = appendScore;
	choiceBtn.className = "btn-custom";
	choiceBtn.setAttribute("value", str);
	choiceBtn.innerHTML = str;
	if(bool)
		choiceBtn.setAttribute("name", "1");
	else
		choiceBtn.setAttribute("name", "0");
	return choiceBtn;
}

function appendScore()
{
	if(this.name == "0")
	{
		wrong++;
		inArow = 0;
		blinkScore();
	}
	else
	{
		inArow++;
		correct++;
		blinkScore();
	}
	var objBody = document.getElementById("answerArea");
	while (objBody.hasChildNodes()) 
		objBody.removeChild(objBody.lastChild);
	console.log("Correct: " + correct + "\nWrong: " + wrong + "\n---------------------------------------");
	chooseQuestion();
}

function blinkScore()
{
	var score = document.getElementById("score");
	score.style.display = "block";
	score.innerHTML = "+" + (inArow * 100).toString();
	totalScore += (inArow * 100);
	$("#score").fadeOut("slow");
}

function question1()
{
	var splitted = question1Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}

	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question1Arr = [];
	prepQ1();
	return splitted[0];
}

function question2()
{
	var splitted = question2Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question2Arr = [];
	prepQ2();
	return splitted[0];
}

function question3()
{
	var splitted = question3Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question3Arr = [];
	prepQ3();
	return splitted[0];
}

function question4()
{
	var splitted = question4Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question4Arr = [];
	prepQ4();
	return splitted[0];
}

function question5()
{
	var splitted = question5Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question5Arr = [];
	prepQ5();
	return splitted[0];
}

function question6()
{
	var splitted = question6Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question6Arr = [];
	prepQ6();
	return splitted[0];
}

function question7()
{
	var splitted = question7Arr[0].split("|");
	var choiceBtns = [];
	var correctChoices = ["Evelyn Lynn", "Jessica Valentine", "Sam Raimi", "Jennifer Lawrence", "Peter Parker", "Lana Del Ray", "Taylor Swift", "Hatsune Miku"];
	for(var i = 0; i < 4; i++)
	{
		if(i + 1 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+1], false));
		}
		else
		{
			choiceBtns.push(createBtns(correctChoices[i], true));
		}
	}
	for(var i = 0; i < 4; i++)
	{
		if(choiceBtns[i].value == "")
		{
			choiceBtns[i].setAttribute("value", correctChoices[i+4]);
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question7Arr = [];
	prepQ7();
	return splitted[0];
}

function question8()
{
	var splitted = question8Arr[0].split("|");
	var choiceBtns = [];
	choiceBtns.push(createBtns(splitted[1],true));
	for(var i = 0; i < 3; i++)
	{
		if(i + 2 < splitted.length)
		{
			choiceBtns.push(createBtns(splitted[i+2], false));
		}
		else
		{
			choiceBtns.push(createBtns("False", false));
		}
	}
	shuffleArray(choiceBtns);
	for(var i = 0; i < choiceBtns.length; i++)
		document.getElementById("answerArea").appendChild(choiceBtns[i]);
	question8Arr = [];
	prepQ8();
	return splitted[0];
}

function prepQ1()
{
	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMov = Parse.Object.extend("movies");
	var queryObj = new Parse.Query(queryMov);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question1Arr.push("Who directed '" + result.get("title") + "'?|" + result.get("director"));
			for(var i = 0; i < 3; i++)
			{
				iteration = Math.floor((Math.random() * (mov_size)));
				var queryWrong = new Parse.Query(queryMov);
				queryWrong.skip(iteration);
				queryWrong.notEqualTo("director", result.get("director"));
				queryWrong.first(
				{
					success: function(r)
					{
						question1Arr[question1Arr.length-1] += "|" + r.get("director");
					},
					error: function(err)
					{
						alert("Could not add wrong answer to Q1");
					}
				});
			}
		},
		error: function(error)
		{
			alert("Could not load Q1");
		}
	});
}

function prepQ2()
{

	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMov = Parse.Object.extend("movies");
	var queryObj = new Parse.Query(queryMov);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question2Arr.push("When was '" + result.get("title") + "' released?|" + result.get("year"));
			var temp = parseInt(result.get("year"));
			for(var i = 0; i < 3; i++)
			{
				question2Arr[0] += "|" + (temp + i + 1).toString();
			}
		},
		error: function(error)
		{
			alert("Could not load Q1");
		}
	});
}

function prepQ3()
{
	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMov = Parse.Object.extend("movies");
	var queryObj = new Parse.Query(queryMov);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question3Arr[0] = "Which star was in '" + result.get("title") + "'?|";
			var querySIM = Parse.Object.extend("stars_in_movies");
			var qq = new Parse.Query(querySIM);
			qq.equalTo("movie_id", result.get("mov_id"));
			qq.first(
			{
				success: function(r)
				{
					if(r === undefined)
					{
						prepQ3();
					}
					var queryStar = Parse.Object.extend("stars");
					var qqq = new Parse.Query(queryStar);
					qqq.equalTo("star_id",r.get("star_id"));
					qqq.first( 
					{
						success: function(rr)
						{
							if(rr.get("first_name") != undefined)
								question3Arr[0] += rr.get("first_name") + " ";
							if(rr.get("last_name") != undefined)
								question3Arr[0] += rr.get("last_name") + " ";
							//console.log(question3Arr[0]);
							for(var i = 0; i < 3; i++)
							{
								var iteration = Math.floor((Math.random() * (star_size)));
								var qqqq = new Parse.Query(queryStar);
								qqqq.notEqualTo("star_id", rr.get("star_id"));
								qqqq.skip(iteration);
								qqqq.first(
								{
									success: function(rrr)
									{
										question3Arr[0]+= "|";
										if(rrr.get("first_name") != undefined)
											question3Arr[0] += rrr.get("first_name") + " ";
										if(rrr.get("last_name") != undefined)
											question3Arr[0] += rrr.get("last_name") + " ";
									},
									error: function(object, err)
									{
										alert("Couldnt find the wrong stars of Q3");
									}
								});
							}
						},
						error: function(object, err)
						{
							alert("Couldnt find the stars of Q3");
						}
					});
				},
				error: function(object, err)
				{
					alert("Couldnt find the stars_in_movies of Q3");
				}
			});
		},
		error: function(error)
		{
			alert("Could not load Q1");
		}
	});
}

function prepQ4()
{
	var iteration = Math.floor((Math.random() * (star_size)));
	var queryStar = Parse.Object.extend("stars");
	var qStar1 = new Parse.Query(queryStar);
	qStar1.skip(iteration);
	qStar1.first(
	{
		success: function(r)
		{
			question4Arr[0] = "In which movie does ";
			if(r.get("first_name") != undefined)
				question4Arr[0] += r.get("first_name") + " ";
			if(r.get("last_name") != undefined)
				question4Arr[0] += r.get("last_name");
			question4Arr[0] += " and ";
			iteration = Math.floor((Math.random() * (star_size)));
			var qStar2 = new Parse.Query(queryStar);
			qStar2.skip(iteration);
			qStar2.notEqualTo("star_id", r.get("star_id"));
			qStar2.first(
			{
				success: function(rr)
				{
					if(r.get("first_name") != undefined)
						question4Arr[0] += rr.get("first_name") + " ";
					if(r.get("last_name") != undefined)
						question4Arr[0] += rr.get("last_name");
					question4Arr[0] += " appear together?|";
					
					var querySIM = Parse.Object.extend("stars_in_movies");
					var q = new Parse.Query(querySIM);
					q.equalTo("star_id", r.get("star_id"));
					q.find(
					{
						success:function(rrr)
						{
							var qq = new Parse.Query(querySIM);
							qq.equalTo("star_id", rr.get("star_id"));

							qq.find(
							{
								success:function(rrrr)
								{

									var id_of_match = "none";
									for(var i = 0; i < rrr.length; i++)
									{
										for(var j = 0; j < rrrr.length; j++)
										{
											if(rrr[i].get("movie_id") == rrrr[j].get("movie_id"))
											{
												id_of_match = rrr[i].get("movie_id");
												break;
											}
										}
										if(id_of_match != "none")
											break;
									}

									var queryMov = Parse.Object.extend("movies");
									if(id_of_match == "none")
									{
										question4Arr[0]+="none";
										for(var i = 0; i < 3; i++)
										{
											//find_wrong_in_movies(0, "movie_id", "title", question4Arr);
											//var queryMov = Parse.Object.extend("movies");
											//var x = "**"
											var qMov = new Parse.Query(queryMov); 
											var iteration = Math.floor((Math.random() * (mov_size)));
											qMov.skip(iteration);
											qMov.notEqualTo("movie_id", 0);
											qMov.first(
											{
												success:function(rs)
												{
													//console.log("FWIM: " + rs.get("title"));
													question4Arr[0] += "|" + rs.get("title");
												},
												error:function(object, err)
												{
													alert("Couldnt find " + "title");
												}
											});
										}
									}
									else
									{
										var qMov = new Parse.Query(queryMov);
										qMov.equalTo("mov_id", id_of_match)
										qMov.first(
										{
											success:function(rResults)
											{
												question4Arr[0]+=rResults.get("title");
												for(var i = 0; i < 3; i++)
												{
													for(var i = 0; i < 3; i++)
													{
														//find_wrong_in_movies(0, "movie_id", "title", question4Arr);
														//var queryMov = Parse.Object.extend("movies");
														//var x = "**"
														var qMov = new Parse.Query(queryMov); 
														var iteration = Math.floor((Math.random() * (mov_size)));
														qMov.skip(iteration);
														qMov.notEqualTo("movie_id", rResults.get("movie_id"));
														qMov.first(
														{
															success:function(rs)
															{
																//console.log("FWIM: " + rs.get("title"));
																question4Arr[0] += "|" + rs.get("title");
															},
															error:function(object, err)
															{
																alert("Couldnt find " + "title");
															}
														});
													}
												}
											},
											error:function(object, err)
											{
												alert("Couldnt the match in the movie table of Q4");
											}
										});
									}
									console.log(question4Arr[0]);
								},
								error:function(object, err)
								{
									alert("Couldnt find the list of movies for star 2 of Q4");
								}
							});
						},
						error: function(object, err)
						{
							alert("Couldnt find the list of movies for star 1 of Q4");
						}
					});
				},
				error: function(object, err)
				{
					alert("Couldnt find the 2nd star of Q4");
				}
			});
		},
		error: function(object, err)
		{
			alert("Couldnt find the 1st star of Q4");
		}
	});
}

function prepQ5()
{
	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMov = Parse.Object.extend("movies");
	var queryObj = new Parse.Query(queryMov);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question5Arr.push("Who directed ");
			var querySIM = Parse.Object.extend("stars_in_movies");
			var simObj = new Parse.Query(querySIM);
			simObj.equalTo("movie_id", result.get("mov_id"));
			simObj.find(
			{
				success: function(r)
				{
					if(r.length < 1)
						prepQ5();
					var queryStar = Parse.Object.extend("stars");
					var starObj = new Parse.Query(queryStar);
					starObj.equalTo("star_id", r[0].get("star_id"));
					starObj.first(
					{
						success: function(rr)
						{
							if(rr.get("first_name") != undefined)
								question5Arr[0]+= rr.get("first_name") + " ";
							if(rr.get("last_name") != undefined)
								question5Arr[0]+= rr.get("last_name");
							question5Arr[0] += "?|" + result.get("director");
							for(var i = 0; i < 3; i++)
							{
								iteration = Math.floor((Math.random() * (mov_size)));
								var queryObj2 = new Parse.Query(queryMov);
								queryObj.skip(iteration);
								queryObj.first(
								{
									success:function(rrr)
									{
										question5Arr[0] += "|" + rrr.get("director");
									},
									error: function(obj, error)
									{
										alert("Could not find wrong in movies Q5");
									}
								});
							}
						},
						error: function(obj, error)
						{
							alert("Could not find star in stars Q5");
						}
					});
				},
				error: function(obj, error)
				{
					alert("Could not find movie in stars_in_movies Q5");
				}
			});

		},
		error: function(error)
		{
			alert("Could not load Q1");
		}
	});
	console.log("Q5: " + question5Arr[0]);
}

function prepQ6()
{
	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMovie = Parse.Object.extend("movies");
	var qMov1 = new Parse.Query(queryMovie);
	qMov1.skip(iteration);
	qMov1.first(
	{
		success: function(r)
		{
			question6Arr[0] = "Which star appears in both '" + r.get("title") + "' and '";
			var iteration2 = Math.floor((Math.random() * (mov_size)));
			var queryMovie2 = Parse.Object.extend("movies");

			var qMov2 = new Parse.Query(queryMovie2);
			qMov2.skip(iteration2);
			//qMov2.notEqualTo("mov_id", r.get("movie_id"));
			qMov2.first(
			{
				success: function(rr)
				{
					question6Arr[0] += rr.get("title") + "'?|";
					var querySIM = Parse.Object.extend("stars_in_movies");
					var q = new Parse.Query(querySIM);
					q.equalTo("movie_id", r.get("mov_id"));
					q.find(
					{
						success:function(rrr)
						{
							var qq = new Parse.Query(querySIM);
							qq.equalTo("movie_id", rr.get("mov_id"));
							qq.find(
							{
								success:function(rrrr)
								{
									var id_of_match = "none";
									for(var i = 0; i < rrr.length; i++)
									{
										for(var j = 0; j < rrrr.length; j++)
										{
											if(rrr[i].get("star_id") == rrrr[j].get("star_id"))
											{
												id_of_match = rrr[i].get("star_id");
												break;
											}
										}
										if(id_of_match != "none")
											break;
									}

									var queryStars = Parse.Object.extend("stars");
									if(id_of_match == "none")
									{
										question6Arr[0]+="none";
										for(var i = 0; i < 3; i++)
										{
											//find_wrong_in_movies(0, "movie_id", "title", question4Arr);
											//var queryMov = Parse.Object.extend("movies");
											//var x = "**"
											var qStars = new Parse.Query(queryStars); 
											var iteration = Math.floor((Math.random() * (star_size)));
											qStars.skip(iteration);
											qStars.notEqualTo("star_id", 0);
											qStars.first(
											{
												success:function(rs)
												{
													//console.log("FWIM: " + rs.get("title"));
													question6Arr[0] += "|" + rs.get("first_name") + " " + rs.get("last_name");
												},
												error:function(object, err)
												{
													alert("Couldnt find " + "title");
												}
											});
										}
									}
									else
									{
										var qMov = new Parse.Query(queryMov);
										qMov.equalTo("mov_id", id_of_match)
										qMov.first(
										{
											success:function(rResults)
											{
												question6Arr[0]+=rResults.get("first_name") + " " + rResults.get("last_name");
												for(var i = 0; i < 3; i++)
												{
													for(var i = 0; i < 3; i++)
													{
														//find_wrong_in_movies(0, "movie_id", "title", question4Arr);
														//var queryMov = Parse.Object.extend("movies");
														//var x = "**"
														var qMov = new Parse.Query(queryMov); 
														var iteration = Math.floor((Math.random() * (mov_size)));
														qMov.skip(iteration);
														qMov.notEqualTo("star_id", rResults.get("star_id"));
														qMov.first(
														{
															success:function(rs)
															{
																//console.log("FWIM: " + rs.get("title"));
																question6Arr[0] += "|" + rs.get("first_name") + " " + rs.get("last_name");
															},
															error:function(object, err)
															{
																alert("Couldnt find " + "title");
															}
														});
													}
												}
											},
											error:function(object, err)
											{
												alert("Couldnt the match in the movie table of Q6");
											}
										});
									}
									console.log(question6Arr[0]);
								},
								error:function(object, err)
								{
									alert("Couldnt find the list of movies for star 2 of Q6");
								}
							});
						},
						error: function(object, err)
						{
							alert("Couldnt find the list of movies for star 1 of Q6");
						}
					});
				},
				error: function(object, err)
				{
					alert("Couldnt find the 2nd star of Q6");
				}
			});
		},
		error: function(object, err)
		{
			alert("Couldnt find the 1st star of Q6");
		}
	});
}
//PRetty bugg
function prepQ7()
{
	var iteration = Math.floor((Math.random() * (sim_size)));
	var querySIM = Parse.Object.extend("stars_in_movies");
	var queryObj = new Parse.Query(querySIM);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question7Arr.push("Which star did not appear in the same movie with ");
			var queryStar = Parse.Object.extend("stars");
			var starObj = new Parse.Query(queryStar);
			starObj.equalTo("star_id", result.get("star_id"));
			starObj.first(
			{
				success: function(r)
				{
					if(r.get("first_name") != undefined)
						question7Arr[0] += r.get("first_name") + " ";
					if(r.get("last_name") != undefined)
						question7Arr[0] += r.get("last_name");
					question7Arr[0] += "?|";
					var queryObj2 = new Parse.Query(querySIM);
					queryObj2.equalTo("star_id", result.get("star_id"));
					queryObj2.find(
					{
						success:function(rr)
						{
							var counter = 0;
							for(var i =0; i < rr.length; i++)
							{
								if(counter > 3)
									break;
								var simObj = new Parse.Query(querySIM);
								simObj.notEqualTo("star_id", result.get("star_id"));
								simObj.equalTo("movie_id", rr[i].get("movie_id"));
								simObj.find(
								{
									success: function(rrr)
									{
										if(rrr.length > 0)
										{
											for(var j = 0; j < rrr.length; j++)
											{
												if(counter > 3)
													break;
												var starObj2 = new Parse.Query(queryStar);
												starObj2.equalTo("star_id", rrr[j].get("star_id"));
												starObj2.first(
												{
													success:function(rrrr)
													{
														if(rrrr.get("first_name") != undefined)
															question7Arr[0] += rrrr.get("first_name") + " ";
														if(rrrr.get("last_name") != undefined)
															question7Arr[0] += rrrr.get("last_name");
														question7Arr[0] += "|";
														console.log("7: " + rrrr.get("first_name") + " " + rrrr.get("last_name"));
													},
													error: function(obj,err)
													{
														alert("Error 2 in Q7");
													}
												});
											}	
										}
									},
									error: function(obj,err)
									{
										alert("Error in Q7");
									}
								});
							}
						},
						error: function(obj,err)
						{
							alert("Could not retrieve list of movies that star is in in Q7");
						}
					});

				},
				error: function(obj, err)
				{
					alert("Could not get star name of Q7");
				}
			});


		},
		error: function(error)
		{
			alert("Could not load Q7");
		}
	});
}

function prepQ8()
{
	var iteration = Math.floor((Math.random() * (mov_size)));
	var queryMov = Parse.Object.extend("movies");
	var queryObj = new Parse.Query(queryMov);
	queryObj.skip(iteration);
	queryObj.first(
	{
		success: function(result)
		{
			question5Arr.push("Who directed ");
			var querySIM = Parse.Object.extend("stars_in_movies");
			var simObj = new Parse.Query(querySIM);
			simObj.equalTo("movie_id", result.get("mov_id"));
			simObj.find(
			{
				success: function(r)
				{
					if(r.length < 1)
						prepQ5();
					var queryStar = Parse.Object.extend("stars");
					var starObj = new Parse.Query(queryStar);
					starObj.equalTo("star_id", r[0].get("star_id"));
					starObj.first(
					{
						success: function(rr)
						{
							if(rr.get("first_name") != undefined)
								question5Arr[0]+= rr.get("first_name") + " ";
							if(rr.get("last_name") != undefined)
								question5Arr[0]+= rr.get("last_name");

							question5Arr[0] += "in " + result.get("year") + "?|" + result.get("director");
							for(var i = 0; i < 3; i++)
							{
								iteration = Math.floor((Math.random() * (mov_size)));
								var queryObj2 = new Parse.Query(queryMov);
								queryObj.skip(iteration);
								queryObj.first(
								{
									success:function(rrr)
									{
										question5Arr[0] += "|" + rrr.get("director");
									},
									error: function(obj, error)
									{
										alert("Could not find wrong in movies Q5");
									}
								});
							}
						},
						error: function(obj, error)
						{
							alert("Could not find star in stars Q5");
						}
					});
				},
				error: function(obj, error)
				{
					alert("Could not find movie in stars_in_movies Q5");
				}
			});

		},
		error: function(error)
		{
			alert("Could not load Q1");
		}
	});
	console.log("Q5: " + question5Arr[0]);
}

//credit goes to Laurens Holst of Stack overflow for this algorithm (based on Fisher-Yates shuffle)
function shuffleArray(array) 
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function pauseGame()
{
	document.getElementById("pauseMenu").style.visibility = "visible";
	document.getElementById("pauseMenu").style.zIndex = 5;
	clearInterval(currInterval);
	var ctnBtn = document.getElementById("gamePause");
	ctnBtn.innerHTML = "&raquo";
	ctnBtn.onclick = resumeGame;
	console.log("PAUSE");
}

function resumeGame()
{
	document.getElementById("pauseMenu").style.visibility = "hidden";
	document.getElementById("pauseMenu").style.zIndex = -1;
	startTimer();
	var ctnBtn = document.getElementById("gamePause");
	ctnBtn.innerHTML = "ll";
	ctnBtn.onclick = pauseGame;
	console.log("CONTINUE");
}