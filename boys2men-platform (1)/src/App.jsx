export default function Boys2MenWebsite() {
  return (
    <div style={{backgroundColor:'#000', color:'#fff', minHeight:'100vh', padding:'40px', fontFamily:'Arial'}}>
      <h1 style={{color:'#FFD700'}}>Boys2Men Website + Portal Structure</h1>

      <h2 style={{marginTop:'30px', color:'#FFD700'}}>PART 1 — PUBLIC WEBSITE</h2>
      <ul>
        <li><b>Home:</b> Landing page with “Register Your Son” + “Become a Mentor”</li>
        <li><b>About:</b> Mission, vision, leadership</li>
        <li><b>Programs:</b> How mentoring works</li>
        <li><b>FAQ:</b> Safety, expectations</li>
        <li><b>Contact:</b> Church + communication info</li>
      </ul>

      <h2 style={{marginTop:'30px', color:'#FFD700'}}>PART 2 — SECURE PORTAL</h2>
      <ul>
        <li><b>Login:</b> Parent / Mentor / Admin</li>
        <li><b>Parent Registration:</b> Student + consent forms</li>
        <li><b>Mentor Application:</b> Testimony + background check</li>
        <li><b>Admin Dashboard:</b> View + manage all data</li>
        <li><b>Admin Export:</b> Download CSV/Excel</li>
        <li><b>Incident Response:</b> Safety reporting</li>
      </ul>

      <h2 style={{marginTop:'30px', color:'#FFD700'}}>USER FLOW</h2>
      <p>Public Website → Secure Portal → Admin Review</p>

      <h2 style={{marginTop:'30px', color:'#FFD700'}}>BUILD PHASES</h2>
      <ul>
        <li><b>Phase 1:</b> Basic site + forms + dashboard</li>
        <li><b>Phase 2:</b> Security + database + login</li>
        <li><b>Phase 3:</b> Full system + scale</li>
      </ul>

      <h2 style={{marginTop:'30px', color:'#FFD700'}}>IMPORTANT</h2>
      <p>This is NOT just a website — this is a secure system.</p>
    </div>
  );
}
