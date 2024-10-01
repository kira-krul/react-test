export default function LegalNotice({ disclaimer, license, terms }) {
  return (
    <div className="LegalNotice">
      <div className="LegalNotice-disclaimer">{disclaimer}</div>
      <a className="Link" href={license}>
        License
      </a>
      <a className="Link" href={terms}>
        Terms of Service
      </a>
    </div>
  );
}
