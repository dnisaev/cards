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
    { title: 'Sign in', value: 'sign-in' },
    { title: 'Radio Group', value: 'radio-group' },
    { title: 'Select', value: 'select' },
    { title: 'Checkbox', value: 'checkbox' },
    { title: 'Button', value: 'button' },
  ]

  return (
    <div>
      <div>
        <Tabs
          defaultValue={'checkbox'}
          tabs={tabsExampleArray}
          tabsTitle={'Example title for Tabs'}
        >
          <TabContent value={'sign-in'}>
            <Card>
              <SignIn />
            </Card>
          </TabContent>
          <TabContent value={'radio-group'}>
            <Card>
              <RadioGroup options={radioGroupExampleArray} />
            </Card>
          </TabContent>
          <TabContent value={'select'}>
            <Card>
              <Select
                ariaLabel={'Select-box'}
                items={selectExampleArray}
                placeholder={'Select-box'}
                title={'Select-box-title'}
              />
            </Card>
          </TabContent>
          <TabContent value={'checkbox'}>
            <Card>
              <Checkbox
                id={'c1'}
                label={'Check-box with label'}
                name={'c1'}
                onCheckedChange={e => {
                  console.log(e)
                }}
              />
              <Checkbox disabled id={'c2'} label={'Check-box with label disabled'} name={'c2'} />
            </Card>
          </TabContent>
          <TabContent value={'button'}>
            <Card>
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
            </Card>
          </TabContent>
        </Tabs>
      </div>
      <hr />
    </div>
  )
}
