export const theme = new (function() {
    this.primary = {
        main: '#0288d1'
    };
    this.secondary = {
        main: "#B32526"
    };
    this.light = {
        main: "#b1adb367",
        sec: "#f4f4f4"
    };
    this.dark = {
        main: "#10182A",
        sec: "#333"
    };
    this.category = {
        supplements: "#B32526",
        workouts: "#3A87AA",
        products: "#EF5D13"
    }
    this.size = {
        maxWidth: "1400px",
        tablet:"850px",
        mobile: '625px'
    }
    this.shrinkLabel = () => {
        return `
            top: -14px;
            font-size: 12px;
            color: ${this.primary.main};
        `
    }
})();
