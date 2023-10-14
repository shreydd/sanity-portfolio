const SanityComp = {
  marks: {
    internalLink: ({ value, children }: any) => {
      const { slug = {} } = value
      const href = `/${slug.current}`
      return <a href={href}>{children}</a>
    },
    link: ({ value, children }: any) => {
      const { blank, href } = value
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

export default SanityComp;