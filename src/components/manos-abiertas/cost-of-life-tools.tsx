'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Coins, TrendingDown, ArrowRightLeft, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CITY_COSTS, CURRENCY_RATES, type CityCost } from '@/data/tools-data';
import { cn } from '@/lib/utils';

export function CostOfLifeTools() {
  return (
    <Tabs defaultValue="cost">
      <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
        <TabsTrigger value="cost" className="gap-1.5 text-xs">
          <Wallet className="h-3.5 w-3.5" />
          Coste de vida
        </TabsTrigger>
        <TabsTrigger value="currency" className="gap-1.5 text-xs">
          <ArrowRightLeft className="h-3.5 w-3.5" />
          Conversor moneda
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cost" className="mt-4">
        <CostCalculator />
      </TabsContent>
      <TabsContent value="currency" className="mt-4">
        <CurrencyConverter />
      </TabsContent>
    </Tabs>
  );
}

function CostCalculator() {
  const [selectedCity, setSelectedCity] = useState<CityCost>(CITY_COSTS[0]);
  const [salary, setSalary] = useState<string>('1200');

  const monthlySalary = parseFloat(salary) || 0;
  const remaining = monthlySalary - selectedCity.total;
  const canSave = remaining > 0;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Calculadora de Coste de Vida
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Estima tus gastos mensuales mínimos en cada ciudad española
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Input panel */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div>
              <Label className="text-xs">Ciudad</Label>
              <Select
                value={selectedCity.id}
                onValueChange={(v) => {
                  const city = CITY_COSTS.find((c) => c.id === v);
                  if (city) setSelectedCity(city);
                }}
              >
                <SelectTrigger className="mt-1">
                  <span className="mr-1">{selectedCity.flag}</span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CITY_COSTS.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.flag} {c.city} - {c.total}€/mes
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="salary" className="text-xs">Tu salario mensual neto (€)</Label>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="1200"
                className="mt-1"
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                SMI 2024: 1.134€ · SMI 2025: 1.184€
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results panel */}
        <Card className={cn('border-2', canSave ? 'border-emerald-300 dark:border-emerald-800' : 'border-red-300 dark:border-red-800')}>
          <CardContent className="p-4">
            <div className="text-center mb-3">
              <div className={cn(
                'text-3xl font-bold tabular-nums',
                canSave ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
              )}>
                {canSave ? '+' : ''}{remaining.toFixed(0)}€
              </div>
              <div className="text-xs text-muted-foreground">
                {canSave ? 'sobrante al mes ✅' : 'déficit mensual ⚠️'}
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Salario</span>
                <span className="font-medium">{monthlySalary.toLocaleString()}€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gasto mínimo</span>
                <span className="font-medium text-red-600 dark:text-red-400">-{selectedCity.total}€</span>
              </div>
              <div className="border-t border-border pt-1.5 flex justify-between font-semibold">
                <span>Balance</span>
                <span className={canSave ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}>
                  {canSave ? '+' : ''}{remaining.toFixed(0)}€
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Breakdown */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
            <TrendingDown className="h-4 w-4 text-primary" />
            Desglose mensual - {selectedCity.flag} {selectedCity.city}
          </h3>
          <div className="space-y-2">
            <CostBar label="Habitación (piso compartido)" amount={selectedCity.rent} total={selectedCity.total} color="bg-rose-500" emoji="🛏️" />
            <CostBar label="Alimentación básica" amount={selectedCity.food} total={selectedCity.total} color="bg-amber-500" emoji="🍽️" />
            <CostBar label="Transporte (abono)" amount={selectedCity.transport} total={selectedCity.total} color="bg-blue-500" emoji="🚌" />
            <CostBar label="Luz, agua, internet" amount={selectedCity.utilities} total={selectedCity.total} color="bg-emerald-500" emoji="💡" />
          </div>
          <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
            <span className="text-sm font-semibold">Total mínimo</span>
            <span className="text-lg font-bold gradient-text">{selectedCity.total}€/mes</span>
          </div>
        </CardContent>
      </Card>

      {/* City comparison */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm font-semibold mb-3">Comparar ciudades</h3>
          <div className="space-y-1.5">
            {CITY_COSTS.sort((a, b) => a.total - b.total).map((city, i) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={cn(
                  'w-full flex items-center gap-3 p-2 rounded-lg text-left transition-colors',
                  selectedCity.id === city.id ? 'bg-primary/10' : 'hover:bg-accent/40'
                )}
              >
                <span className="text-[10px] font-bold text-muted-foreground w-4">#{i + 1}</span>
                <span className="text-lg">{city.flag}</span>
                <span className="flex-1 text-sm font-medium">{city.city}</span>
                <span className="text-sm font-bold tabular-nums">{city.total}€</span>
                <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-brand rounded-full"
                    style={{ width: `${(city.total / 1000) * 100}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            Ordenado de más barato a más caro. Datos aproximados 2024.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function CostBar({ label, amount, total, color, emoji }: { label: string; amount: number; total: number; color: string; emoji: string }) {
  const percent = Math.round((amount / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="flex items-center gap-1.5">
          <span>{emoji}</span>
          {label}
        </span>
        <span className="font-semibold tabular-nums">{amount}€</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div className={cn('h-full rounded-full', color)} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState<string>('EUR');
  const [toCurrency, setToCurrency] = useState<string>('MAD');

  const eurAmount = fromCurrency === 'EUR'
    ? parseFloat(amount) || 0
    : (parseFloat(amount) || 0) / (CURRENCY_RATES.find((c) => c.code === toCurrency)?.rate || 1);

  const result = toCurrency === 'EUR'
    ? eurAmount
    : eurAmount * (CURRENCY_RATES.find((c) => c.code === toCurrency)?.rate || 1);

  function swap() {
    const tmp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tmp);
  }

  const allCurrencies = [{ code: 'EUR', name: 'Euro', flag: '🇪🇺', rate: 1 }, ...CURRENCY_RATES];
  const fromRate = allCurrencies.find((c) => c.code === fromCurrency);
  const toRate = allCurrencies.find((c) => c.code === toCurrency);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Coins className="h-6 w-6 text-primary" />
          Conversor de Moneda
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Convierte euros a tu moneda nacional (tipo de cambio aproximado)
        </p>
      </div>

      <Card>
        <CardContent className="p-5 space-y-3">
          {/* From */}
          <div>
            <Label className="text-xs">Cantidad</Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100"
                className="text-lg font-bold"
              />
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-40">
                  <span className="mr-1">{fromRate?.flag}</span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {allCurrencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.flag} {c.code} - {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swap button */}
          <div className="flex justify-center">
            <Button variant="outline" size="icon" onClick={swap} className="rounded-full" aria-label="Intercambiar ciudades">
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* To */}
          <div>
            <Label className="text-xs">Resultado</Label>
            <div className="flex gap-2 mt-1">
              <div className="flex-1 px-3 py-2 rounded-md border border-border bg-muted/30 text-lg font-bold tabular-nums">
                {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-40">
                  <span className="mr-1">{toRate?.flag}</span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {allCurrencies.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.flag} {c.code} - {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Exchange rate info */}
          <div className="text-xs text-muted-foreground text-center pt-2 border-t border-border">
            1 EUR = {(toRate?.rate || 1).toLocaleString()} {toCurrency}
            <br />
            <span className="text-[10px]">Tipo de cambio aproximado · Actualiza en tu banco</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick amounts */}
      <Card>
        <CardContent className="p-4">
          <div className="text-xs font-semibold mb-2">Cantidades rápidas (EUR → {toCurrency})</div>
          <div className="grid grid-cols-4 gap-2">
            {[10, 50, 100, 500].map((amt) => (
              <button
                key={amt}
                onClick={() => { setAmount(amt.toString()); setFromCurrency('EUR'); }}
                className="p-2 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/30 transition-colors text-center"
              >
                <div className="text-sm font-bold">{amt}€</div>
                <div className="text-[10px] text-muted-foreground tabular-nums">
                  {(amt * (toRate?.rate || 1)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
