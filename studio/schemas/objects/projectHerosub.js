export default {
  type: 'object',
  name: 'projectHerosub',
  title: 'Project Hero Sub',
  fields: [
    {
      name: 'heroMsg',
      title: 'Hero ',
      type: 'string'
    },
    {
      name: 'heroSub',
      title: 'Sub Title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      heroMsg: 'heroMsg'
    },
    prepare (data) {
      return {
        ...data,
        title: data.heroMsg
      }
    }
  }
}
