const skills = {
    name: "skill",
    title: "Skills",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        title: 'Project',
        name: 'project',
        type: 'array',
        of: [{
            type: 'reference',
            to: [{type: 'project'}]
        }] 
      },
    ]
  }
  
  export default skills;