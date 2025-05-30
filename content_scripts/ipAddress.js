function getIP() {
  return fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => data.ip)
    .catch(error => {
      console.error("Error fetching IP address:", error);
      return "Error fetching IP";
    });
}

getIP().then(ip => alert(ip)); 
