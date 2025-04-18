export type HTMLElementTagNames = keyof HTMLElementTagNameMap

export type ClubSlug = 'fine-arts' | 'malhar' | 'dzire' | 'aaveg' | 'nlc' | 'phewsion' | 'pixels' | 'collabs' | 'wecan' | 'animystics'

// For events and contests

export type Heading = Record<'heading', string>
export type UnorderedList = Record<'ul', string[]>
export type Link = Record<'a', string>
export type Para = {
  p: string
  bold?: boolean
}

export type ProseElement = Heading | Para | UnorderedList | Link

export interface ImageSource {
  srcSet: string
  media?: string
  type?: string
}

export interface Image {
  sources?: ImageSource[]
  src: string
}
