function SectionHeading({ as: Tag = "h2", children, className = "" }) {
  return <Tag className={`heading-3 ${className}`}>{children}</Tag>;
}

export default SectionHeading;