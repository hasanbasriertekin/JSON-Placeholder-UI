const row = document.getElementById("row");

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  for (user of data) {
    row.innerHTML += `<div class="col-lg-6"><div class="card border-warning mb-3">
    <div class="card-header bg-transparent border-primary"> <p>${user.id}</p> <i class="bi bi-person-vcard"></i> ${user.name}<p id="bosluk"><i class="bi bi-fingerprint"></i> ${user.username}</p><i class="bi bi-telephone"></i> ${user.phone}<p id="bosluk"><i class="bi bi-envelope-at-fill"></i> ${user.email}</p><i class="bi bi-globe"></i> ${user.website}</div>
    <div class="card-body text-secondary">
      <h5 class="card-title"> <i class="bi bi-pin-map-fill"></i>Address</h5>
      <p class="card-text"> ${user.address.city} , ${user.address.street} , ${user.address.suite} , ${user.address.zipcode}</p>
    </div>
    <div class="card-footer bg-transparent border-success"><i class="bi bi-building"></i> ${user.company.name}<p id="bosluk"><i class="bi bi-volume-up"></i> ${user.company.catchPhrase}</p></div>
  </div></div>`;
  }
}
getUsers();
