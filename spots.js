document.addEventListener("DOMContentLoaded", function(){

const data={
"Burnt Timber":[
{"lat":51.5714078,"lng":-114.9846127,"desc":"The main road running through this area is all gravel but maintained. Lots of oil or natural gas pumping and compressor stations in the area as well as active logging."},
{"lat":51.5750865,"lng":-114.9907744,"desc":"This is the South entrance beside the old gas plant."},
{"lat":51.5760831,"lng":-114.9913866,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.5772775,"lng":-114.9925272,"desc":"This and the next 2 spots are almost like a staging area. It's a huge space. It can also get fairly muddy in this field."},
{"lat":51.6017451,"lng":-115.0123461,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6153081,"lng":-115.0373023,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6181464,"lng":-115.0420462,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6179177,"lng":-115.0507694,"desc":"Between this spot and the next 2 there is camping in nodes only. Most of which is on the right hand side(east) of the road"},
{"lat":51.6310588,"lng":-115.0905469,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6318723,"lng":-115.0901445,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6313113,"lng":-115.0920734,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.6327104,"lng":-115.0916087,"desc":"The next 4 are right on the Red Deer river at a bridge. There is a fair bit of space but fills up by Wed or Thurs each week."},
{"lat":51.632912,"lng":-115.1028414,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6334211,"lng":-115.1052139,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6341532,"lng":-115.1080741,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6345442,"lng":-115.1318495,"desc":"The next 3 span almost a kilometer with multiple spots. The river runs in behind this area with some spots you can camp right beside it. This are gets busy with a fair number of atv's as well."},
{"lat":51.6147358,"lng":-115.1485466,"desc":"The next 4 spots are all on the river again at a bridge. This first spot is where you turn in to reach the big open area on the river where the next 3 spots are. If you are pulling a big trailer 26ft or bigger might be tough to get to the back spots."},
{"lat":51.6152542,"lng":-115.1496507,"desc":"Entrance to the next 3"},
{"lat":51.6153262,"lng":-115.1501774,"desc":"Entrance to the next 3"},
{"lat":51.6152852,"lng":-115.151084,"desc":"Entrance to the next 3"},
{"lat":51.6151393,"lng":-115.1479911,"desc":"This spot is great for 1 trailer and a tent. It's just across the bridge on the left."},
{"lat":51.6160597,"lng":-115.1457873,"desc":"This spot is great for 1 trailer and a tent. It's just across the bridge on the left."},
{"lat":51.615857,"lng":-115.144045,"desc":"This next spot is where I run some of my group camps. This area of Burnt Timber is fairly quiet not alot of traffic as it dead ends about 1km past. This are you can fit 10+ trailers and tents. Lots of dead fall left from logging just past this spot."},
{"lat":51.6125231,"lng":-115.1377769,"desc":"This next and final spot is up a step hill if you take a drive up to the end of the road it's a pumping station and a big turn around area but amazing views up there."}
],
"Dutch Creek":[
{"lat":49.7975444,"lng":-114.1533099,"desc":"This first set of the coordinates is the turn off at Maycroft. On hwy 22."},
{"lat":49.8668425,"lng":-114.3754988,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8620817,"lng":-114.3816541,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8612217,"lng":-114.3836949,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8622122,"lng":-114.3830874,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8610626,"lng":-114.385251,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8597262,"lng":-114.3876183,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8590253,"lng":-114.3877323,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8580189,"lng":-114.3883559,"desc":"Just before hwy 40 on both sides of the road you will see spots to camp. A lot of people use this area for a staging area to ride their atvs. Also long weekends. The parks dept. Put out a huge roll off garbage bin which is handy to dump your garbage. These are the coordinates for the area just described."},
{"lat":49.8592795,"lng":-114.3892599,"desc":"This set of coordinates is the intersection of the Maycroft rd. And hwy 40"},
{"lat":49.8567201,"lng":-114.3913459,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8563794,"lng":-114.390717,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8545267,"lng":-114.3923226,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8570225,"lng":-114.3954524,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8524297,"lng":-114.4013928,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8522799,"lng":-114.4032791,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8515466,"lng":-114.4053011,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8497581,"lng":-114.4060133,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8476743,"lng":-114.3975881,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8496027,"lng":-114.4011373,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8479538,"lng":-114.4061843,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8412449,"lng":-114.4138557,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8395921,"lng":-114.4135305,"desc":"These are all the coordinates for this area. In order driving south towards Racehorse Creek. Hwy 40 will take you all the way into Coleman. It's gravel but maintained."},
{"lat":49.8371869,"lng":-114.4205062,"desc":"This is the last one to keep you 1km from Racehorse Creek Provincial park"},
{"lat":49.9047057,"lng":-114.3951416,"desc":"These next ones are from when you turn right off the Maycroft road onto hwy 40 north. Heading toward Dutch Creek Provincial campground. This first set of coordinates is the entrance to Dutch Creek road. And the Dutch Creek campground."},
{"lat":49.9056468,"lng":-114.4008245,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.9047584,"lng":-114.4025257,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.9050173,"lng":-114.402002,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.9046086,"lng":-114.4005758,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.9046677,"lng":-114.4013804,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.905923,"lng":-114.4059586,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.9028054,"lng":-114.4335176,"desc":"This is used as a staging area for a lot of atv day users. Turning west onto the Dutch Creek road. This is a old logging road. It can have a lot of potholes but taking it slow let's even big 4th wheel toy haulers down it. Watch for people on atvs. The next bunch of coordinates will show some of the spots to camp. You will see dozens and dozens more spots to camp all the way to the end of the road."},
{"lat":49.903144,"lng":-114.4373126,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9040201,"lng":-114.4420742,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.902813,"lng":-114.448478,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9026379,"lng":-114.450149,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9021695,"lng":-114.4508206,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9027996,"lng":-114.4507689,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9051894,"lng":-114.461588,"desc":"You can camp at any point along this road. I only have a few of the coordinates marked here. But there are over 100 spots to camp driving down this road. Dutch Creek has amazing atv trails here as well."},
{"lat":49.9047431,"lng":-114.4648026,"desc":"Ŵ¹, -114.4694613"},
{"lat":49.9119465,"lng":-114.4880996,"desc":"This next one is the entrance to the best camping spots imo in all of Dutch Creek. You can drive right down to the creek and camp."},
{"lat":49.9110776,"lng":-114.4882592,"desc":"The next few are the best spots I think"},
{"lat":49.9111409,"lng":-114.489432,"desc":"The next few are the best spots I think"},
{"lat":49.9106093,"lng":-114.4898692,"desc":"The next few are the best spots I think"},
{"lat":49.9097206,"lng":-114.489374,"desc":"The next few are the best spots I think"},
{"lat":49.9098197,"lng":-114.4902668,"desc":"The next few are the best spots I think"},
{"lat":49.9100082,"lng":-114.4903627,"desc":"The next few are the best spots I think"},
{"lat":49.91285,"lng":-114.4967869,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9116768,"lng":-114.4976285,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9125842,"lng":-114.5001145,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9108999,"lng":-114.5019441,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.910917,"lng":-114.5061421,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9105281,"lng":-114.5112937,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9087067,"lng":-114.5226059,"desc":"The next few are in a huge area with dozens and dozens of spots to camp. Big atv area."},
{"lat":49.9034394,"lng":-114.3880934,"desc":"The next bunch are for if you don't turn onto the Dutch Creek road at the campground continue just past heading north on hwy 40. On the right side has dozens of spots right up to the Oldman river. There is also a old gravel pit there."},
{"lat":49.9099957,"lng":-114.3954159,"desc":"The next bunch are for if you don't turn onto the Dutch Creek road at the campground continue just past heading north on hwy 40. On the right side has dozens of spots right up to the Oldman river. There is also a old gravel pit there."},
{"lat":49.915871,"lng":-114.3941881,"desc":"The next bunch are for if you don't turn onto the Dutch Creek road at the campground continue just past heading north on hwy 40. On the right side has dozens of spots right up to the Oldman river. There is also a old gravel pit there."},
{"lat":49.9180234,"lng":-114.3899381,"desc":"The next bunch are for if you don't turn onto the Dutch Creek road at the campground continue just past heading north on hwy 40. On the right side has dozens of spots right up to the Oldman river. There is also a old gravel pit there."}
],
"Indian Graves":[
{"lat":50.298577,"lng":-114.232322,"desc":"This is the turn off on hwy 22 to Indian Graves. This is the smallest area in Crown Land. A ton of spots all along the main road you will see. I have a few listed but you will see 5x more."},
{"lat":50.2658393,"lng":-114.3155226,"desc":"This leads to a bunch of areas to camp"},
{"lat":50.2680832,"lng":-114.2985412,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2628429,"lng":-114.3166005,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.262468,"lng":-114.3180911,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2639913,"lng":-114.319389,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2630622,"lng":-114.321586,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2525588,"lng":-114.3367251,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2522298,"lng":-114.33798,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2530103,"lng":-114.3381272,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2277964,"lng":-114.4001805,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2272972,"lng":-114.4006341,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.227285,"lng":-114.4012383,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.2265813,"lng":-114.4010629,"desc":"[  ] The next  àààaaaà.  b unch are some great spots. You will  see multiple other spots beside these. These cover a few kms. Indian Graves is the smallest crown land area."},
{"lat":50.29508333333333,"lng":-114.22297222222223,"desc":"This ìs the coordinates for the west entrance off of hwy 22 the chain lakes are fairly close for fishing just to the south of the entrance."},
{"lat":50.22763888888889,"lng":-114.39944444444446,"desc":"Nice spot for a trailer right in the trees. Really secluded. Room for other trailers and tents. Just not right in the trees."},
{"lat":50.217777777777776,"lng":-114.42869444444445,"desc":"Bear Pond. No camping right here but just off the main road you can find spots. Fishing and swimming allowed."},
{"lat":49.91802777777777,"lng":-114.38994444444445,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.91636111111111,"lng":-114.39072222222222,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.91166666666666,"lng":-114.39211111111112,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.903527777777775,"lng":-114.38691666666668,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.90219444444444,"lng":-114.38647222222222,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.90280555555555,"lng":-114.43352777777778,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.91108333333333,"lng":-114.48825000000001,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.90972222222222,"lng":-114.4893888888889,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.90983333333333,"lng":-114.49055555555556,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.91019444444444,"lng":-114.51172222222222,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."},
{"lat":49.90986111111111,"lng":-114.51083333333334,"desc":"All in the Dutch Creek area. My favorite by far. Each one is on the water."}
],
"Porcupine Hills":[
{"lat":49.9682872,"lng":-114.1230761,"desc":"This first set of coordinates is the entrance to Porcupine hills. The main road through this area is gravel or dirt. It does get some maintenance done but when it rains a lot this road turns to mud and it's very easy to get stuck due to the hills."},
{"lat":49.9741151,"lng":-114.0867881,"desc":"Follow this road listed as hwy520 up to the intersection of this set of coordinates"},
{"lat":49.9714004,"lng":-114.0870165,"desc":"This set will be the first camping spot on the right"},
{"lat":49.9667911,"lng":-114.0865528,"desc":"Next is a big open spot."},
{"lat":49.9606958,"lng":-114.0796759,"desc":"The next few are all huge open areas."},
{"lat":49.9591678,"lng":-114.077043,"desc":"The next few are all huge open areas."},
{"lat":49.9550535,"lng":-114.0748694,"desc":"The next few are all huge open areas."},
{"lat":49.9541576,"lng":-114.0698751,"desc":"The next few are all huge open areas."},
{"lat":49.9544309,"lng":-114.0679671,"desc":"The next few are all huge open areas."},
{"lat":49.9514065,"lng":-114.0707874,"desc":"The next few are all huge open areas."},
{"lat":49.9230978,"lng":-114.0567145,"desc":"These next couple are a long way down the road and the last few I have found. The road continues south and you can camp anywhere you can find."},
{"lat":49.9164768,"lng":-114.0511288,"desc":"These next couple are a long way down the road and the last few I have found. The road continues south and you can camp anywhere you can find."},
{"lat":49.9150878,"lng":-114.0512402,"desc":"These next couple are a long way down the road and the last few I have found. The road continues south and you can camp anywhere you can find."},
{"lat":49.9046403,"lng":-114.025499,"desc":"These next couple are a long way down the road and the last few I have found. The road continues south and you can camp anywhere you can find."},
{"lat":49.9993944,"lng":-114.098608,"desc":"If you turn left you will find a bunch of spots listed. It runs up then down a big 1, -114.0977792"},
{"lat":50.0066299,"lng":-114.084456,"desc":"If you turn left you will find a bunch of spots listed. It runs up then down a big 1, -114.0977792"},
{"lat":50.0066873,"lng":-114.0799656,"desc":"If you turn left you will find a bunch of spots listed. It runs up then down a big 1, -114.0977792"},
{"lat":50.0082426,"lng":-114.0721118,"desc":"If you turn left you will find a bunch of spots listed. It runs up then down a big 1, -114.0977792"},
{"lat":50.0251427,"lng":-114.0460387,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0268344,"lng":-114.0471246,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0288326,"lng":-114.050519,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0265038,"lng":-114.042984,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0269738,"lng":-114.0422692,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0265365,"lng":-114.041844,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0270782,"lng":-114.0404486,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.0273959,"lng":-114.0398686,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.025133,"lng":-114.0499504,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."},
{"lat":50.030177,"lng":-114.0423419,"desc":"This next few spots. is the start of a couple huge areas people camp and use as staging areas to ride their atvs hike, bike ride."}
],
"Waiporous":[
{"lat":51.2242373,"lng":-114.6601251,"desc":"Location marker"},
{"lat":51.2782657,"lng":-114.9344919,"desc":"From the turn off of hwy 1a. It is a fair ways up hwy 40 to the first area which is a turn left at this set of coordinates. Which is the Transalta loop I think is the unofficial name. Turn left onto this road."},
{"lat":51.2699708,"lng":-114.9705961,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2702728,"lng":-114.9705261,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2703385,"lng":-114.9710605,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2703918,"lng":-114.9718792,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708031,"lng":-114.9748226,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2711834,"lng":-114.9756293,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708354,"lng":-114.9760383,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2707469,"lng":-114.976784,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2711631,"lng":-114.9775303,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2718544,"lng":-114.9808603,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2721124,"lng":-114.981392,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2720235,"lng":-114.9821407,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2718702,"lng":-114.9838788,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2705908,"lng":-114.9842985,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2712271,"lng":-114.9847713,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708474,"lng":-114.9855974,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2704432,"lng":-114.9859303,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2714981,"lng":-114.9869113,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2717494,"lng":-114.9883899,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2713657,"lng":-114.9894571,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2705783,"lng":-114.9889901,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708893,"lng":-114.9907134,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2700073,"lng":-114.990413,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.27071,"lng":-114.9923264,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2714505,"lng":-114.9924823,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2705831,"lng":-114.9939649,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2711698,"lng":-114.9957465,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2706095,"lng":-115.0001393,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2709502,"lng":-115.0020464,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708933,"lng":-115.0086148,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2707608,"lng":-115.0100229,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2705302,"lng":-115.0141834,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.270039,"lng":-115.0139587,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2698183,"lng":-115.0127571,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2692286,"lng":-115.0133096,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2692897,"lng":-115.0225924,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2723629,"lng":-115.0247107,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2708121,"lng":-115.0234742,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2752121,"lng":-115.0247925,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2763567,"lng":-115.0243929,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.2760964,"lng":-115.0250282,"desc":"Follow this road for about 3.5km and then you will start seeing all these spots to camp. The following coordinates are some of the areas. You will see a ton more spots as well. Each one of my GPS coordinates shows a general area to camp. There might be room for 30 trailers or tents in that area. You will be able to choose your spot."},
{"lat":51.3213259,"lng":-114.966893,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3222994,"lng":-114.9683199,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3209094,"lng":-114.968682,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3211294,"lng":-114.9827412,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3407274,"lng":-114.9665205,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3440911,"lng":-114.9662573,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3498077,"lng":-114.9700597,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3499244,"lng":-114.9701197,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3691349,"lng":-114.9917668,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3792813,"lng":-115.0001474,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3909036,"lng":-115.0122002,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.3912697,"lng":-115.0121999,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.391895,"lng":-115.0006543,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.4040217,"lng":-115.0628933,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.4038397,"lng":-115.0621218,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.4040374,"lng":-115.0619528,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.4033396,"lng":-115.0653988,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.403339,"lng":-115.0661589,"desc":"The next bunch are farther up hwy 40 past the turn of the previous bunch. All of the next bunch will guide you up hwy 40 with a few turn offs but nothing as far as the Transalta loop went."},
{"lat":51.57141666666667,"lng":-114.98461111111111,"desc":"This first gps coordinate is the south entrance to Burnt Timber.  Just to give you a starting point if need be."},
{"lat":51.61772222222222,"lng":-115.05016666666667,"desc":"This next spot This has a little creek or stream running beside it and under the road via culvert. Room for one maybe 2 trailers I have seen people fishing there."},
{"lat":51.63361111111111,"lng":-115.08602777777777,"desc":"This is a ways back off the main road. Cars and trucks can makenit back. With maybe a smaller Rpod style trailer. It is ver secluded and right beside the river."},
{"lat":51.632111111111115,"lng":-115.1051111111111,"desc":"This spot is back off the main road. I have seen trailers back in this spot. 26ft is about the biggest I have seen. There are lots of spots for multiple big trailers closer to the main road and a short 2min walk to the back and the Red Deer river"},
{"lat":51.63341666666667,"lng":-115.10522222222221,"desc":"Next 2 are right off the main road and how you access the river. Or where to camp with 32ft and bigger trailers or multiple trailers. These spots fill up fast."},
{"lat":51.63291666666667,"lng":-115.10283333333332,"desc":"Next 2 are right off the main road and how you access the river. Or where to camp with 32ft and bigger trailers or multiple trailers. These spots fill up fast."},
{"lat":51.615027777777776,"lng":-115.14772222222223,"desc":"Next one is Great spot on the river for 1 trailer and a tent. Good swimming and fishing just down from the bridge."},
{"lat":51.610416666666666,"lng":-115.15152777777779,"desc":"Great spot. Used to have a picnic table and nice big firepit here. Right in the trees. Huge field for a big group if you want as well."},
{"lat":51.61011111111111,"lng":-115.15258333333334,"desc":"This next pin is a perfect spot one of my favorites and a secret spot. for 1 trailer and a tent. Right beside a stream with fishing. Secluded in the trees. Tons for firewood in the areas. It is also right on the big field if you have lots of people or to play around in."}
]
};

let allSpots=[];

Object.keys(data).forEach(area=>{
data[area].forEach(s=>{
allSpots.push({...s,area});
});
});

const map=L.map("map").setView([51,-114.5],7);

L.tileLayer(
"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
{maxZoom:19}
).addTo(map);

/* Add map pins */
allSpots.forEach(s=>{

const m=L.marker([s.lat,s.lng]).addTo(map);

m.bindPopup(
`<b>${s.area}</b><br>
${s.desc}<br><br>
<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">Open in Google Maps</a>`
);

});

/* Render campsite list */
window.renderList=function(){

const filter=document.getElementById("areaFilter").value;
const list=document.getElementById("list");

list.innerHTML="";

allSpots.forEach(s=>{

if(filter!=="All" && s.area!==filter) return;

const div=document.createElement("div");
div.className="site";

div.innerHTML=`
<b>Area:</b> ${s.area}<br>
<b>Description:</b> ${s.desc}<br>

<b>Satellite Imagery:</b><br>

<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>

<br><br>

<button onclick="toggleFavorite('${s.lat},${s.lng}')">
⭐ Save Favorite
</button>
`;

div.style.cursor="pointer";

div.onclick=function(){

// zoom to the location
map.setView([s.lat,s.lng],14);

// open popup
L.popup()
.setLatLng([s.lat,s.lng])
.setContent(`<b>${s.area}</b><br>${s.desc}`)
.openOn(map);

// force scroll back to map
window.scrollTo({
top: document.getElementById("map").offsetTop,
behavior: "smooth"
});

};

list.appendChild(div);

});

};

window.locateUser=function(){

if(!navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(pos=>{

const lat=pos.coords.latitude;
const lng=pos.coords.longitude;

map.setView([lat,lng],10);

L.marker([lat,lng]).addTo(map).bindPopup("You are here").openPopup();

});

};

function getFavorites(){
return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function toggleFavorite(id){

let favs=getFavorites();

if(favs.includes(id)){
favs=favs.filter(f=>f!==id);
}else{
favs.push(id);
}

localStorage.setItem("favorites",JSON.stringify(favs));

alert("Favorite updated ⭐");

}

window.showFavorites=function(){

const list=document.getElementById("list");
list.innerHTML="";

const favs=getFavorites();

allSpots.forEach(s=>{

const id=`${s.lat},${s.lng}`;

if(!favs.includes(id)) return;

const div=document.createElement("div");
div.className="site";

div.innerHTML=`
<b>Area:</b> ${s.area}<br>
<b>Description:</b> ${s.desc}<br>

<a target="_blank" href="https://maps.google.com/?q=${s.lat},${s.lng}">
Open in Google Maps
</a>
`;

list.appendChild(div);

});

};

renderList();

});
