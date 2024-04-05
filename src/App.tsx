import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Icon } from '@/components/ui/icon/'
import { RadioGroup } from '@/components/ui/radiogroup'
import { Select } from '@/components/ui/select'

export function App() {
  const radioGroupExampleArray = [
    { label: 'First value', value: 'first' },
    { label: 'Second value', value: 'second' },
    { label: 'Third value', value: 'third' },
    { label: 'Fourth value', value: 'fourth' },
    { label: 'Fifth value', value: 'fifth' },
  ]

  const selectExampleArray = [
    { text: 'First select value', value: 'first' },
    { text: 'Second select value', value: 'second' },
    { text: 'Third select value', value: 'third' },
    { text: 'Fourth select value', value: 'fourth' },
    { text: 'Fifth select value', value: 'fifth' },
  ]

  return (
    <div>
      <hr />
      <div style={{ margin: '10px' }}>
        <Select ariaLabel={'Select-box'} items={selectExampleArray} placeholder={'Select-box'} />
      </div>
      <hr />
      <div style={{ margin: '10px' }}>
        <RadioGroup options={radioGroupExampleArray} />
      </div>
      <hr />
      <div>
        <Checkbox checked id={'c1'} title={'Check-box with title'} />
      </div>
      <hr />
      <div>
        <Button fullWidth variant={'primary'}>
          Button Primary Full Width
        </Button>
      </div>
      <hr />
      <div>
        <Button variant={'primary'}>Button Primary</Button>

        <Button variant={'primary'}>
          <Icon iconId={'logout'} />
          Button Primary Icon
        </Button>

        <Button disabled variant={'primary'}>
          Button Primary Disabled
        </Button>
      </div>
      <hr />
      <div>
        <Button variant={'secondary'}>Button Secondary</Button>
        <Button variant={'secondary'}>
          <Icon iconId={'logout'} />
          Button Secondary Icon
        </Button>
        <Button disabled variant={'secondary'}>
          Button Secondary Disabled
        </Button>
      </div>
      <hr />
      <div>
        <Button as={'a'} href={'/'} variant={'primary'}>
          <Icon iconId={'logout'} />
          Button Primary as Link
        </Button>
      </div>
      <hr />
    </div>
  )
}
