import { Slide } from 'components/Slide'
import { memo } from 'react'

export default memo(() => {
  return (
    <Slide
      title="Fast and easy"
      theme="green"
      steps={[
        [
          {
            type: 'callout',
            content: `It's not just UX, it's creativity`,
          },
        ],
      ]}
    />
  )
})
