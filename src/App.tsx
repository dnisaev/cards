import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'

export function App() {
  return (
    <div>
      <div>
        {/*<div>*/}
        {/*  <Button as={'a'} href={'/link'} variant={'primary'}>*/}
        {/*    Button Primary as Link*/}
        {/*  </Button>*/}
        {/*</div>*/}

        {/*<Button fullWidth variant={'primary'}>*/}
        {/*  Button Primary Full Width*/}
        {/*</Button>*/}

        <Button variant={'primary'}>Button Primary</Button>

        <Button variant={'primary'}>
          <Icon iconId={'logout'} />
          Button Primary Icon
        </Button>

        <Button disabled variant={'primary'}>
          Button Primary Disabled
        </Button>
      </div>

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
    </div>
  )
}
