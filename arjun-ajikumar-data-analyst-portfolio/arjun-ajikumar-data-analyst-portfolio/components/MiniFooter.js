import { contact, profile } from "@/data/portfolio";

export default function MiniFooter() {
  return (
    <footer className="mini-footer">
      <span>&copy; {new Date().getFullYear()} {profile.name}</span>
      <nav aria-label="Contact">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
  );
}
