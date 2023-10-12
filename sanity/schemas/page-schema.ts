const page = {
    name: 'page',
    title: "Pages",
    type:'document',
    fields:[
        {
            name: "title",
            title: "Title",
            type: 'string'
        },
        {
            name: "slug",
            title: "Slug",
            type: 'slug',
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',
            of: [
                { 
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External link',
                                fields: [
                                  {
                                    name: 'href',
                                    type: 'url',
                                    title: 'URL'
                                  },
                                  {
                                    title: 'Open in new tab',
                                    name: 'blank',
                                    description: 'Read https://css-tricks.com/use-target_blank/',
                                    type: 'boolean'
                                  }
                                ]
                              },
                    
                        ]
                      } 
                }
            ]
        }
    ]
}

export default page;