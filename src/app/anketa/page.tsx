'use client';

import { Button, Input, RadioGroup, Slider, Stepper, Switch } from '@/components/ui';
import { useState } from 'react';

export default function AnketaPage() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    age: 20,
    phone: '',
    gender: '',
    agree: false,
  });

  const handleChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (value: string) => {
    handleChange('phone', value);
  };

  const handleAgeChange = (value: number) => {
    handleChange('age', Math.max(0, Math.min(100, value)));
  };

  const isPhoneValid = formData.phone.length === 11;
  const isSubmitDisabled = !formData.agree;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные анкеты:', formData);
    alert('Анкета отправлена!');
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 text-left mb-4">Анкета</h1> 
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            label="Фамилия*"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            required
          />
          <Input
            label="Имя*"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            required
          />
          <Input
            label="Отчество"
            value={formData.middleName}
            onChange={(e) => handleChange('middleName', e.target.value)}
          />
          <div className="space-y-4">
            <Slider
              value={formData.age}
              onChange={handleAgeChange}
              label="Возраст"
            />
            <Stepper
              value={formData.age}
              onChange={handleAgeChange}
            />
          </div>
          <div>
            <Input
              label="Номер телефона*"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder="+7999123456"
              className={isPhoneValid ? 'border-green-600 text-green-900' : 'border-red-600 text-red-900'}
              required
            />
            <p className={`text-sm mt-1 ${isPhoneValid ? 'text-green-600' : 'text-red-600'}`}>
              {formData.phone.length}/11 символов
            </p>
          </div>
          <RadioGroup
            value={formData.gender}
            onChange={(value) => handleChange('gender', value)}
            options={['Мужской', 'Женский']}
            label="Пол*"
          />
          <Switch
            checked={formData.agree}
            onChange={(checked) => handleChange('agree', checked)}
            label="Согласен с условиями обработки данных*"
          />
          <Button
            type="submit"
            disabled={isSubmitDisabled}
          >
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}