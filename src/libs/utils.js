export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const imageCheck = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl, { method: "HEAD" });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

export const DateTime = () => {
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth() + 1; 
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}


export const DateIso = () => {
  var date = new Date();
  var iso = date.toISOString().match(/(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/);
  return iso[1] + ' ' + iso[2];
}