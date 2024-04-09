import { LoginForm } from '@/components/auth/login-form/LoginForm'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { Icon } from '@/components/ui/Icon/'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Select } from '@/components/ui/Select'

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
      <div>
        <LoginForm />
      </div>
      <hr />
      <div style={{ margin: '10px' }}>
        <Select
          ariaLabel={'Select-box'}
          items={selectExampleArray}
          placeholder={'Select-box'}
          title={'Select-box-title'}
        />
      </div>
      <hr />
      <div style={{ margin: '10px' }}>
        <RadioGroup options={radioGroupExampleArray} />
      </div>
      <hr />
      <div>
        <Checkbox
          id={'c1'}
          label={'Check-box with label'}
          name={'c1'}
          onCheckedChange={e => {
            console.log(e)
          }}
        />
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
