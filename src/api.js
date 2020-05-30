//const newRoomEndpoint = "https://fu6720epic.execute-api.us-west-2.amazonaws.com/default/dailyWwwApiDemoNewCall";

  const newRoomEndpoint = "https://api.daily.co/v1/rooms";

/**
 * Create a short-lived room for demo purposes.
 *
 * IMPORTANT: this is purely a "demo-only" API, and *not* how we recommend
 * you create rooms in real production code. In your code, we recommend that you:
 * - Create rooms by invoking the Daily.co REST API from your own backend server
 *   (or from the Daily.co dashboard if you're OK with creating rooms manually).
 * - Pass an "exp" (expiration) parameter to the Daily.co REST endpoint so you
 *   don't end up with a huge number of live rooms.
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily.co REST API to create rooms.
 */
// async function createRoom() {
//   let response = await fetch(newRoomEndpoint),
//     room = await response.json();
//   return room;

//   // Comment out the above and uncomment the below, using your own URL
//   // return { url: "https://your-domain.daily.co/hello" };
// }


async function createRoom() {

//create call start and end time
	let d = new Date();
	let ds = new Date();
	ds.setMinutes(ds.getMinutes()+2);
	let startTime = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	let endTimes = ds.getFullYear()+"-"+ds.getMonth()+"-"+ds.getDate()+" "+ds.getHours()+":"+ds.getMinutes()+":"+ds.getSeconds();

  let startTimeDate = (new Date(startTime)).getTime();
  let endTimeDate = (new Date(endTimes)).getTime();

  let  properties = { 
      exp:Math.floor((Date.now()/1000)) + 120,
      //nbf:startTimeDate,
      owner_only_broadcast: true,
  }
//let bodydata =  JSON.stringify({properties: properties})
    

console.log('endTimeDate exp',endTimeDate ,"nbf",startTimeDate ,Math.floor((Date.now()/1000)) + 120);

  let response = await fetch(newRoomEndpoint, {
        method: 'POST',
       headers: {
    'content-type': 'application/json',
    authorization: 'Bearer 3923f7fdb33ea1cba39bad3ff994b467bfe9521aa871554dc1d5749d58dfcb4a'
    }, body: JSON.stringify({properties: properties}),

      },),
    room = await response.json();
  return room;

  // Comment out the above and uncomment the below, using your own URL
  // return { url: "https://your-domain.daily.co/hello" };
}



export default { createRoom };
