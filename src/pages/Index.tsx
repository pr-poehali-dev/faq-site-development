import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено! 🚀",
      description: "Наша команда свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const faqData = [
    {
      question: "КАК ВЗЯТЬ ЗАДАНИЕ?",
      answer: "Зайдите в раздел \"Доступные задания\", выберите подходящее задание и нажмите \"Взять в работу\". После этого у вас будет 24 часа на выполнение. Следуйте инструкциям в задании и загружайте скриншоты выполненной работы."
    },
    {
      question: "КАК ЗАРАБОТАТЬ БОЛЬШЕ?",
      answer: "Повышайте свой уровень знатока, выполняя задания качественно и в срок. Чем выше уровень, тем больше оплата за каждое задание. Также доступны бонусные задания с повышенной оплатой для опытных пользователей."
    },
    {
      question: "ПРО УРОВЕНЬ ЗНАТОКА",
      answer: "Уровень знатока отражает ваш опыт и качество работы. Всего 5 уровней: Новичок, Практик, Профи, Эксперт и Мастер. С каждым уровнем растёт оплата и открывается доступ к более интересным заданиям."
    },
    {
      question: "ЧТО ЗА СКРИНЫ?",
      answer: "Скриншоты (скрины) — это доказательство выполнения задания. Вам нужно сделать снимок экрана с результатом работы согласно инструкции в задании. Загружайте четкие скриншоты без обрезки важных элементов."
    },
    {
      question: "ПФ? ЛЕГКИЕ ЗАДАНИЯ",
      answer: "ПФ (Простые задания) — это быстрые задания на 5-10 минут работы. Идеально для новичков! Обычно это простые действия: поставить лайк, написать комментарий, подписаться на страницу. Оплата ниже, но выполняются быстро."
    },
    {
      question: "СКОЛЬКО Я ЗАРАБОТАЮ?",
      answer: "Заработок зависит от вашего уровня и количества выполненных заданий. Новички зарабатывают от 50-100₽ за задание, Мастера — до 500-1000₽. В среднем активные пользователи зарабатывают 15 000-30 000₽ в месяц."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 pointer-events-none" />
      
      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 gradient-text leading-tight">
              VCTR
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
              Заработок на отзывах!
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ниже ответы на все интересующие вас вопросы 👇
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="gradient-primary text-white font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform">
                <Icon name="Rocket" className="mr-2" size={24} />
                Начать зарабатывать
              </Button>
              <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg hover:scale-105 transition-transform">
                <Icon name="Play" className="mr-2" size={24} />
                Как это работает
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-105 animate-scale-in">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name="Wallet" size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">Быстрые выплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Выводите деньги уже после первого выполненного задания
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105 animate-scale-in">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">Рост заработка</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Чем больше работаете, тем выше ваш уровень и оплата
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all hover:scale-105 animate-scale-in">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name="Headphones" size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">Поддержка 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Наша команда всегда готова помочь решить любой вопрос
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              База знаний
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Самые частые вопросы наших пользователей
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl px-6 hover:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-14">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl font-bold gradient-text">
                  Остались вопросы?
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Напишите нам, и мы поможем разобраться!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Ваш вопрос</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш вопрос подробно..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-32 text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-white font-semibold text-lg h-14 hover:scale-105 transition-transform"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="border-t border-border/50 backdrop-blur-sm py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">VCTR</h3>
            <p className="text-muted-foreground mb-6">
              Зарабатывай на отзывах легко и быстро
            </p>
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Mail" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageSquare" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={24} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              © 2024 VCTR. Все права защищены.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
