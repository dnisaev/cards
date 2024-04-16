import { SignIn } from '@/components/auth/SignIn/SignIn'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Checkbox } from '@/components/ui/Checkbox'
import { Icon } from '@/components/ui/Icon/'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Select } from '@/components/ui/Select'
import { TabContent, Tabs } from '@/components/ui/Tabs/Tabs'

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
  const tabsExampleArray = [
    { disabled: false, title: 'Sign in', value: 'sign-in' },
    { disabled: false, title: 'Radio Group', value: 'radio-group' },
    { disabled: false, title: 'Select', value: 'select' },
    { disabled: false, title: 'Checkbox', value: 'checkbox' },
    { disabled: false, title: 'Button', value: 'button' },
    { disabled: true, title: 'Disabled', value: 'disabled' },
  ]
  const componentsExampleArray = [
    { component: <SignIn />, value: 'sign-in' },
    { component: <RadioGroup options={radioGroupExampleArray} />, value: 'radio-group' },
    {
      component: (
        <Select
          ariaLabel={'Select-box'}
          items={selectExampleArray}
          placeholder={'Select-box'}
          title={'Select-box-title'}
        />
      ),
      value: 'select',
    },
    {
      component: (
        <>
          <Checkbox
            id={'c1'}
            label={'Check-box with label'}
            name={'c1'}
            onCheckedChange={e => {
              console.log(e)
            }}
          />
          <Checkbox disabled id={'c2'} label={'Check-box with label disabled'} name={'c2'} />
        </>
      ),
      value: 'checkbox',
    },
    {
      component: (
        <>
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
        </>
      ),
      value: 'button',
    },
  ]

  return (
    <div>
      <div>
        <Tabs defaultValue={'select'} tabs={tabsExampleArray} tabsTitle={'Example title for Tabs'}>
          {componentsExampleArray.map(c => {
            return (
              <TabContent key={c.value} value={c.value}>
                <Card>{c.component}</Card>
              </TabContent>
            )
          })}
        </Tabs>
      </div>
      <hr />
    </div>
  )
}
