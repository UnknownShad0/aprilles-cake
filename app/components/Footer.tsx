export default function Footer() {
    return (
      <footer id="contact" className="bg-pink-200 text-center py-8 text-pink-800">
        <h4 className=" text-lg">Aprille’s Cake Creation 🍰</h4>
        <p className="mt-2">📍 Quezon City, Philippines</p>
        <p>📞 0992-908-9985 (Aprille Marie Molina)</p>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Aprille’s Cake Creation. All Rights Reserved.
        </p>
      </footer>
    );
  }
  