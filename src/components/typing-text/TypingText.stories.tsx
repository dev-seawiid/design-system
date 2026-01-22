import type { Meta, StoryObj } from '@storybook/react'
import { TypingText } from './TypingText'

const meta: Meta<typeof TypingText> = {
  title: 'Effects/TypingText',
  component: TypingText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '텍스트를 타이핑 애니메이션으로 표시하는 컴포넌트입니다. leohuynh.dev의 TypedBios 컴포넌트를 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    typeSpeed: {
      control: { type: 'number', min: 10, max: 200, step: 10 },
      description: '타이핑 속도 (ms)',
    },
    backSpeed: {
      control: { type: 'number', min: 5, max: 100, step: 5 },
      description: '삭제 속도 (ms)',
    },
    loop: {
      control: 'boolean',
      description: '반복 여부',
    },
    backDelay: {
      control: { type: 'number', min: 0, max: 5000, step: 100 },
      description: '삭제 전 대기 시간 (ms)',
    },
    showCursor: {
      control: 'boolean',
      description: '커서 표시 여부',
    },
  },
}

export default meta
type Story = StoryObj<typeof TypingText>

const bios = [
  "I'm aliased as Leo at work.",
  "I'm a learner, builder, and freedom seeker.",
  'I live in Ha Noi, Viet Nam.',
  'I was born in the beautiful Moc Chau plateau.',
  'My first programming language I learned was Pascal.',
  'I love web development.',
  "I'm focusing on building eCommerce software.",
  'I work mostly with JS/TS technologies.',
]

export const Default: Story = {
  args: {
    strings: ['I love web development.', "I'm a software engineer.", 'I build things with code.'],
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  },
}

export const BiosExample: Story = {
  args: {
    strings: bios,
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  },
  render: (args) => (
    <div className="wg-flex wg-min-h-8 wg-items-center wg-gap-0.5">
      <TypingText {...args} />
    </div>
  ),
}

export const WithoutCursor: Story = {
  args: {
    strings: ['Hello, World!', 'Welcome to my blog.', 'Enjoy reading!'],
    showCursor: false,
  },
}

export const FastTyping: Story = {
  args: {
    strings: ['Fast typing...', 'Quick animations...', 'Smooth transitions...'],
    typeSpeed: 20,
    backSpeed: 5,
  },
}

export const SlowTyping: Story = {
  args: {
    strings: ['Slow and steady...', 'Taking my time...', 'Enjoying the moment...'],
    typeSpeed: 100,
    backSpeed: 50,
  },
}

export const NoLoop: Story = {
  args: {
    strings: ['First message.', 'Second message.', 'Final message.'],
    loop: false,
  },
}

export const SingleString: Story = {
  args: {
    strings: ['I love web development.'],
    loop: false,
  },
}

export const WithCustomCursor: Story = {
  args: {
    strings: ['Custom cursor!', 'Different style!', 'Unique look!'],
    cursorChar: '_',
  },
}

export const InContext: Story = {
  render: () => (
    <div className="wg-space-y-4">
      <div className="wg-text-base wg-leading-7 wg-text-neutral-600 dark:wg-text-neutral-400">
        <p>Howdy, fellow!</p>
        <h1 className="wg-text-3xl wg-font-bold wg-mt-4 wg-mb-2">
          {`I'm Tuan Anh Huynh - a passionate Software Engineer in Viet Nam`}
        </h1>
        <ul className="wg-list-disc wg-list-inside wg-space-y-1 wg-mt-4">
          <li>
            <TypingText
              strings={[
                "I'm aliased as Leo at work.",
                "I'm a learner, builder, and freedom seeker.",
                'I love web development.',
                "I'm focusing on building eCommerce software.",
              ]}
              typeSpeed={40}
              backSpeed={10}
              loop={true}
              backDelay={1000}
            />
          </li>
        </ul>
      </div>
    </div>
  ),
}
